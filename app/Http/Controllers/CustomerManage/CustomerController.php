<?php

namespace App\Http\Controllers\CustomerManage;

use App\Http\Controllers\Controller;
use App\Http\Requests\Index\CustomerRequest;
use App\Http\Requests\Store\CustomerRequest as StoreCustomerRequest;
use App\Models\Category1;
use App\Models\Customer;
use App\Models\City;
use App\Models\Items;
use App\Models\Prefectures;
use App\Models\Purchase;
use App\Models\Shop;
use Carbon\Carbon;
use Illuminate\Support\Facades\DB;

class CustomerController extends Controller
{
    /**
     * 顧客一覧取得API
     *
     * @param CustomerRequest $request
     * @return 
     */
    public function index(CustomerRequest $request)
    {
        //check validate
        $errors = $this->checkForm($request);
        if (!empty($errors['errors'])) {
            return response()->json([
                'status' => 'error',
                'message' => 'バリデーションエラーが発生しました。',
                'errors' => $errors['errors'],
            ], 422);
        }

        // バリデーションされたデータを取得
        $validatedData = $request->validated();
        if (isset($validatedData['id'])) {
            $customer = Customer::find($validatedData['id']);
            $prefectures = Prefectures::select(['id', 'name'])->get();
            $cities = City::select(['id', 'prefecture_id', 'name'])->get();
            $shops = Shop::select(['id', 'name'])->get();
            $categories1 = Category1::select(['id', 'name'])->get();
            $purchases = Purchase::getPurchasesByCustomer($validatedData['id']);
            $items = array();
            foreach ($purchases as $key => $purchase) {
                $item = Items::getItems($purchase->id);
                $items[] = $item;
            }
            return response()->json([
                "prefectures" => $prefectures,
                "cities" => $cities,
                "shops" => $shops,
                "categories1" => $categories1,
                "customer" => $customer,
                "purchases" => $purchases,
                "items" => $items,
            ]);
        } else {
            $results = Customer::getCustomers($validatedData);
            $customers = array();
            foreach ($results as $key => $data) {
                $customer = array();
                $customer['id'] = $data->id;
                $customer['no'] = str_pad($data->id, 6, '0', STR_PAD_LEFT);
                $customer['type'] = $data->type;
                $customer['shop_name'] = $data->shop_name;
                $customer['gender'] = $data->gender;
                $customer['name'] = $data->name;
                $customer['name_kana'] = $data->name_kana;
                $customer['birthday'] = $data->birthday;
                $customer['age'] = Carbon::parse($data->birthday)->age;
                $customer['phone_number1'] = $data->phone_number1;
                $customer['phone_number2'] = $data->phone_number2;
                $customer['address'] = $data->address1 . $data->address2 . $data->address3;
                if ($data->identification_id1) {
                    if ($data->identification_id1 == 1) {
                        $customer['identification1'] = "マイナンバー";
                    } else if ($data->identification_id1 == 2) {
                        $customer['identification1'] = "運転免許証";
                    } else if ($data->identification_id1 == 3) {
                        $customer['identification1'] = "健康保険証";
                    } else if ($data->identification_id1 == 4) {
                        $customer['identification1'] = "パスポート";
                    }
                }
                switch ($data->job) {
                    case 0:
                        $customer['job'] = "自営業";
                        break;
                    case 1:
                        $customer['job'] = "自由業";
                        break;
                    case 2:
                        $customer['job'] = "会社員";
                        break;
                    case 3:
                        $customer['job'] = "バート･アールバイト";
                        break;
                    case 4:
                        $customer['job'] = "主婦";
                        break;
                    case 5:
                        $customer['job'] = "学生";
                        break;
                    case 6:
                        $customer['job'] = "学生";
                        break;

                    default:
                        $customer['job'] = "";
                        break;
                }
                // $customer['identification_no1'] = $data->id;
                $purchases = DB::table('purchases')->where('customer_id', $data->id)->orderBy('created_at', 'DESC')->get();
                if (count($purchases) > 0) {
                    $customer['shop_visit_num'] = count($purchases);
                    $customer['last_visit_date'] = $purchases[0]->created_at;
                } else {
                    $customer['shop_visit_num'] = 0;
                    $customer['last_visit_date'] = "";
                }
                $customer['note'] = $data->note;
                $customers[] = $customer;
            }

            return response()->json([
                "customers" => $customers,
            ]);
        }
    }

    /**
     * 顧客登録API
     *
     * @param StoreCustomerRequest $request
     */
    public function createOrUpdate(StoreCustomerRequest $request)
    {
        $user = auth()->user();
        //check validate
        $errors = $this->checkForm($request);
        if (!empty($errors['errors'])) {
            return response()->json([
                'status' => 'error',
                'message' => 'バリデーションエラーが発生しました。',
                'errors' => $errors['errors'],
            ], 422);
        }

        // バリデーションされたデータを取得
        $validatedData = $request->all();
        $uploadedFilePaths = array();
        if ($request->hasFile('files')) {
            foreach ($request->file('files') as $file) {
                // Store the file and get its path
                $path = $file->store('uploads', 'public'); // 'uploads' folder in public storage
                $uploadedFilePaths[] = asset("storage/$path"); // Generate public URL
            }
        }
        foreach ($uploadedFilePaths as $key => $value) {
            if (isset($validatedData['identification_id1']) && isset($validatedData['identification_id2'])) {
                if ($key == 0) {
                    $validatedData['identification_path1'] = $value;
                } elseif ($key == 1) {
                    $validatedData['identification_path2'] = $value;
                }
            } else {
                if ($key == 0) {
                    if (isset($validatedData['identification_id1'])) {
                        $validatedData['identification_path1'] = $value;
                    } elseif (isset($validatedData['identification_id2'])) {
                        $validatedData['identification_path2'] = $value;
                    }
                }
            }
        }
        $customer = new customer(); // 新規登録
        if (isset($validatedData['id'])) { // 更新
            $customer = Customer::find($validatedData['id']);
        }
        $customer->shop_id = $validatedData['shop_id'];
        $customer->type = $validatedData['type'];
        $customer->name = $validatedData['name'];
        $customer->name_kana = $validatedData['name_kana'];
        $customer->phone_number1 = $validatedData['phone_number1'];
        $customer->phone_number2 = $validatedData['phone_number2'];
        $customer->birthday = $validatedData['birthday'];
        $customer->gender = $validatedData['gender'];
        $customer->zipcode = $validatedData['zipcode'];
        $customer->job = $validatedData['job'];
        $customer->address1 = $validatedData['address1'];
        $customer->address2 = $validatedData['address2'];
        $customer->address3 = $validatedData['address3'];
        if (isset($validatedData['identification_id1'])) {
            $customer->identification_id1 = $validatedData['identification_id1'];
            $customer->identification_type1 = $validatedData['identification_type1'];
            if (isset($validatedData['identification_path1'])) {
                $customer->identification_path1 = $validatedData['identification_path1'];
            }
        }
        if (isset($validatedData['identification_id2'])) {
            $customer->identification_id2 = $validatedData['identification_id2'];
            $customer->identification_type2 = $validatedData['identification_type2'];
            if (isset($validatedData['identification_path2'])) {
                $customer->identification_path2 = $validatedData['identification_path2'];
            }
        }
        $customer->note = $validatedData['note'];
        if (isset($validatedData['hearing_item1_id'])) {
            $customer->hearing_item1_id = $validatedData['hearing_item1_id'];
        }
        if (isset($validatedData['hearing_item1_value'])) {
            $customer->hearing_item1_value = $validatedData['hearing_item1_value'];
        }
        if (isset($validatedData['hearing_item2_value'])) {
            $customer->hearing_item2_value = $validatedData['hearing_item2_value'];
        }
        if (isset($validatedData['hearing_line'])) {
            $customer->hearing_line = $validatedData['hearing_line'];
        }
        if (isset($validatedData['hearing_google'])) {
            $customer->hearing_google = $validatedData['hearing_google'];
        }
        if (isset($validatedData['hearing_coupon'])) {
            $customer->hearing_coupon = $validatedData['hearing_coupon'];
        }
        if (isset($validatedData['hearing_gift'])) {
            $customer->hearing_gift = $validatedData['hearing_gift'];
        }
        $customer->save();

        return response()->json(['message' => 'OK'], 200);
    }

    /**
     * 顧客退会API
     *
     * @param CustomerRequest $request
     * @return 
     */
    public function destroy(CustomerRequest $request)
    {
        //check validate
        $errors = $this->checkForm($request);
        if (!empty($errors['errors'])) {
            return response()->json([
                'status' => 'error',
                'message' => 'バリデーションエラーが発生しました。',
                'errors' => $errors['errors'],
            ], 422);
        }

        // バリデーションされたデータを取得
        $validatedData = $request->validated();
        Customer::find($validatedData['id'])->delete();

        return response()->json(['message' => 'OK'], 200);
    }
}
