<?php

namespace App\Http\Controllers\CustomerManage;

use App\Http\Controllers\Controller;
use App\Http\Requests\Index\PurchaseIndexRequest;
use App\Http\Requests\Store\CustomerRequest as StoreCustomerRequest;
use App\Http\Requests\Index\PurchaseSearchRequest;
use App\Models\Customer;
use App\Models\City;
use App\Models\Items;
use App\Models\Prefectures;
use App\Models\Purchase;
use App\Models\Shop;
use App\Models\User;
use Carbon\Carbon;

class PurchaseController extends Controller
{
    /**
     * 買取計算書一覧取得API
     *
     * @param PurchaseIndexRequest $request
     * @return 
     */
    public function index(PurchaseIndexRequest $request)
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
        // 買取計算書
        $purchase = Purchase::find($validatedData['purchase_id']);
        $paymentOfficer = User::find($purchase->payment_officer_id);
        $purchase['payment_officer_name'] = $paymentOfficer->name;
        $serviceOfficer = User::find($purchase->service_officer_id);
        $purchase['service_officer_name'] = $serviceOfficer->name;
        // 顧客
        $customer = Customer::find($purchase->customer_id);
        // 商品
        $items = Items::getItems($purchase->id);
        // History
        $historyPurchase = Purchase::getPurchasesByCustomer($customer->id);
        $historyItems = array();
        foreach ($historyPurchase as $key => $purchase) {
            $item = Items::getItems($purchase->id);
            $historyItems[] = $item;
        }

        return response()->json([
            'purchase' => $purchase,
            'customer' => $customer,
            'items' => $items,
            'history_purchases' => $historyPurchase,
            'history_items' => $historyItems,
        ], 200);
    }
    /**
     * 買取計算書一覧取得API
     *
     * @param PurchaseSearchRequest $request
     * @return 
     */
    public function search(PurchaseSearchRequest $request)
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
        $purchases = Purchase::getPurchasesBySearch($validatedData);
        $result = array();
        foreach ($purchases as $key => $purchase) {
            $data = array();
            $data['id'] = $purchase->id;
            $data['no'] = str_pad($purchase->id, 6, '0', STR_PAD_LEFT);
            $data['shop_name'] = $purchase->shop_name;
            $data['name'] = $purchase->name;
            $data['name_kana'] = $purchase->name_kana;
            $data['phone_number'] = $purchase->phone_number1;
            $data['birthday'] = $purchase->birthday;
            $data['address'] = $purchase->address1 . $purchase->address2 . $purchase->address3;
            if ($purchase->identification_id1) {
                if ($purchase->identification_id1 == 1) {
                    $data['identification1'] = "マイナンバー";
                } else if ($purchase->identification_id1 == 2) {
                    $data['identification1'] = "運転免許証";
                } else if ($purchase->identification_id1 == 3) {
                    $data['identification1'] = "健康保険証";
                } else if ($purchase->identification_id1 == 4) {
                    $data['identification1'] = "パスポート";
                }
            }
            switch ($purchase->job) {
                case 0:
                    $data['job'] = "自営業";
                    break;
                case 1:
                    $data['job'] = "自由業";
                    break;
                case 2:
                    $data['job'] = "会社員";
                    break;
                case 3:
                    $data['job'] = "バート･アールバイト";
                    break;
                case 4:
                    $data['job'] = "主婦";
                    break;
                case 5:
                    $data['job'] = "学生";
                    break;
                case 6:
                    $data['job'] = "学生";
                    break;

                default:
                    $data['job'] = "";
                    break;
            }
            $data['note'] = $purchase->note;
            $result[] = $data;
        }
        return response()->json([
            'purchases' => $result,
        ], 200);
    }

    /**
     * 買取計算書初期登録API
     *
     */
    public function initRegister()
    {
        $purchase = new purchase();
        $purchase->status = 1;
        $purchase->save();

        return response()->json(['purchase' => $purchase], 200);
    }

    /**
     * 買取計算書お預かり証更新API
     *
     * @param StoreCustomerRequest $request
     */
    public function leaveItemsRegister(StoreCustomerRequest $request)
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

        return response()->json(['message' => 'OK'], 200);
    }

    /**
     * 買取計算書更新API
     *
     * @param StoreCustomerRequest $request
     */
    public function update(StoreCustomerRequest $request)
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
        $validatedData = $request->all();

        // 顧客新規登録
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
                if (isset($validatedData['document_type'])) {
                    if ($key == 2) {
                        $validatedData['document_path'] = $value;
                    }
                }
            } else {
                if ($key == 0) {
                    if (isset($validatedData['identification_id1'])) {
                        $validatedData['identification_path1'] = $value;
                    } elseif (isset($validatedData['identification_id2'])) {
                        $validatedData['identification_path2'] = $value;
                    }
                }
                if (isset($validatedData['document_type'])) {
                    if ($key == 1) {
                        $validatedData['document_path'] = $value;
                    }
                }
            }
        }
        $customer = new customer();
        if (isset($validatedData['shop_id'])) {
            $customer->shop_id = $validatedData['shop_id'];
        }
        if (isset($validatedData['type'])) {
            $customer->type = $validatedData['type'];
        }
        $customer->name = $validatedData['name'];
        if (isset($validatedData['name_kana'])) {
            $customer->name_kana = $validatedData['name_kana'];
        }
        if (isset($validatedData['phone_number1'])) {
            $customer->phone_number1 = $validatedData['phone_number1'];
        }
        if (isset($validatedData['phone_number2'])) {
            $customer->phone_number2 = $validatedData['phone_number2'];
        }
        if (isset($validatedData['birthday'])) {
            $customer->birthday = $validatedData['birthday'];
        }
        if (isset($validatedData['gender'])) {
            $customer->gender = $validatedData['gender'];
        }
        if (isset($validatedData['zipcode'])) {
            $customer->zipcode = $validatedData['zipcode'];
        }
        if (isset($validatedData['job'])) {
            $customer->job = $validatedData['job'];
        }
        if (isset($validatedData['address1'])) {
            $customer->address1 = $validatedData['address1'];
        }
        if (isset($validatedData['address2'])) {
            $customer->address2 = $validatedData['address2'];
        }
        if (isset($validatedData['address3'])) {
            $customer->address3 = $validatedData['address3'];
        }
        if (isset($validatedData['identification_id1'])) {
            $customer->identification_id1 = $validatedData['identification_id1'];
            $customer->identification_type1 = $validatedData['identification_type1'];
            $customer->identification_path1 = $validatedData['identification_path1'];
        }
        if (isset($validatedData['identification_id2'])) {
            $customer->identification_id2 = $validatedData['identification_id2'];
            $customer->identification_type2 = $validatedData['identification_type2'];
            $customer->identification_path2 = $validatedData['identification_path2'];
        }
        if (isset($validatedData['document_type'])) {
            $customer->document_path = $validatedData['document_path'];
        }
        if (isset($validatedData['note'])) {
            $customer->note = $validatedData['note'];
        }
        $customer->hearing_item1_id = $validatedData['hearing_item1_id'];
        $customer->hearing_item1_value = $validatedData['hearing_item1_value'];
        $customer->hearing_item2_value = $validatedData['hearing_item2_value'];
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

        // 買取計算書更新
        $purchase = Purchase::find($validatedData['purchase_id']);
        $purchase->customer_id = $customer->id;
        $purchase->payment_officer_id = $validatedData['payment_officer_id'];
        $purchase->service_officer_id = $validatedData['service_officer_id'];
        $purchase->check_plan_date = $validatedData['check_plan_date'];
        $purchase->coupon = $validatedData['coupon'];
        $purchase->status = 2;
        $purchase->save();

        // 商品更新
        foreach ($validatedData['items'] as $key => $json) {
            $data = json_decode($json, true);
            $item = Items::find($data['id']);
            $item->customer_id = $customer->id;
            $item->amount = $data['amount'];
            $item->hearing_value1 = $data['hearing_value1'];
            $item->hearing_value2 = $data['hearing_value2'];
            $item->hearing_value3 = $data['hearing_value3'];
            $item->hearing_value4 = $data['hearing_value4'];
            $item->request_basis = $data['request_basis'];
            $item->rate = $data['rate'];
            $item->request_price = $data['request_price'];
            $item->highest_check_price = $data['highest_check_price'];
            $item->corporations = $data['corporations'];
            $item->corporation_check_price = $data['corporation_check_price'];
            $item->supervisor_instruction_price = $data['supervisor_instruction_price'];
            $item->purchase_price = $data['purchase_price'];
            $item->images = $data['images'];
            $item->image_files = $data['image_files'];
            $item->agree = $data['agree'];
            $item->result = 3;
            $item->save();
        }

        return response()->json(['message' => 'OK'], 200);
    }

    /**
     * 買取計算書更新API
     *
     * @param StoreCustomerRequest $request
     */
    public function contract(StoreCustomerRequest $request)
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
        $validatedData = $request->all();

        // 顧客新規登録
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
                } elseif ($key == 2) {
                    $validatedData['sign_path'] = $value;
                }
            } else {
                if ($key == 0) {
                    if (isset($validatedData['identification_id1'])) {
                        $validatedData['identification_path1'] = $value;
                    } elseif (isset($validatedData['identification_id2'])) {
                        $validatedData['identification_path2'] = $value;
                    }
                } elseif ($key == 1) {
                    $validatedData['sign_path'] = $value;
                }
            }
        }
        $customer = new customer();
        if (isset($validatedData['customer_id'])) {
            $customer = Customer::find($validatedData['customer_id']);
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
            $customer->identification_path1 = $validatedData['identification_path1'];
        }
        if (isset($validatedData['identification_id2'])) {
            $customer->identification_id2 = $validatedData['identification_id2'];
            $customer->identification_type2 = $validatedData['identification_type2'];
            $customer->identification_path2 = $validatedData['identification_path2'];
        }
        if (isset($validatedData['note'])) {
            $customer->note = $validatedData['note'];
        }
        $customer->save();

        // 買取計算書更新
        $purchase = Purchase::find($validatedData['purchase_id']);
        $purchase->customer_id = $customer->id;
        $purchase->service_officer_id = $validatedData['service_officer_id'];
        $purchase->purchase_date = $validatedData['purchase_date'];
        $purchase->signature_img_path = $validatedData['sign_path'];
        $purchase->purchase_price = $validatedData['purchase_price'];
        $purchase->status = 3;
        $purchase->save();

        // 商品更新
        foreach ($validatedData['items'] as $key => $json) {
            $data = json_decode($json, true);
            $item = Items::find($data['id']);
            $item->customer_id = $customer->id;
            $item->result = 1;
            $item->save();
        }

        return response()->json(['message' => 'OK'], 200);
    }

    /**
     * 買取計算書削除API
     *
     * @param PurchaseIndexRequest $request
     * @return 
     */
    public function destroy(PurchaseIndexRequest $request)
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
        Purchase::find($validatedData['purchase_id'])->delete();

        return response()->json(['message' => 'OK'], 200);
    }
}
