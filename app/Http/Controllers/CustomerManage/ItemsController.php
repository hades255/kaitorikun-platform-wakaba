<?php

namespace App\Http\Controllers\CustomerManage;

use App\Http\Controllers\Controller;
use App\Http\Requests\Index\CustomerRequest;
use App\Http\Requests\Index\ItemInitRegisterRequest;
use App\Http\Requests\Index\ItemMasterRequest;
use App\Http\Requests\Index\ItemsListRequest;
use App\Http\Requests\Store\CustomerRequest as StoreCustomerRequest;
use App\Models\Customer;
use App\Models\City;
use App\Models\ItemMaster;
use App\Models\Items;
use App\Models\Prefectures;
use App\Models\Purchase;
use App\Models\Shop;
use App\Models\Staff;
use App\Models\User;
use Carbon\Carbon;

class ItemsController extends Controller
{
    /**
     * 商品一覧取得API
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
            return response()->json([
                "prefectures" => $prefectures,
                "cities" => $cities,
                "shops" => $shops,
                "customer" => $customer,
            ]);
        } else {
            $results = Customer::getCustomers($validatedData);
            $customers = array();
            foreach ($results as $key => $data) {
                $customer = array();
                $customer['id'] = $data->id;
                $customer['shop_name'] = $data->shop;
                $customer['type'] = $data->type;
                $customer['gender'] = $data->gender;
                $customer['name'] = $data->name;
                $customer['name_kana'] = $data->name_kana;
                $customer['birthday'] = $data->birthday;
                $customer['age'] = Carbon::parse($data->birthday)->age;
                $customer['phone_number1'] = $data->phone_number1;
                $customer['phone_number2'] = $data->phone_number2;
                $customer['address1'] = $data->address1;
                $customer['address2'] = $data->address2;
                $customer['address3'] = $data->address3;
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
                // $customer['identification_no1'] = $data->id;
                $customer['business'] = "";
                $customer['shop_visit_num'] = 100;
                $customer['last_visit_date'] = "2024-12-20";
                $customer['note'] = $data->note;
                $customers[] = $customer;
            }

            return response()->json([
                "customers" => $customers,
            ]);
        }
    }
    /**
     * 商品検索API
     *
     * @param ItemMasterRequest $request
     * @return 
     */
    public function search(ItemMasterRequest $request)
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
            // $customer = Customer::find($validatedData['id']);
            // $prefectures = Prefectures::select(['id', 'name'])->get();
            // $cities = City::select(['id', 'prefecture_id', 'name'])->get();
            // $shops = Shop::select(['id', 'name'])->get();
            // return response()->json([
            //     "prefectures" => $prefectures,
            //     "cities" => $cities,
            //     "shops" => $shops,
            //     "customer" => $customer,
            // ]);
        } else {
            $results = ItemMaster::getItems($validatedData);
            $items = array();
            foreach ($results as $key => $item) {
                $item['selected'] = false;
                $item['key'] = $item->id;
                $items[] = $item;
            }

            return response()->json([
                "items" => $items,
            ]);
        }
    }

    /**
     * 商品初期登録API
     * 
     *@param ItemMasterRequest $request
     */
    public function initRegister(ItemInitRegisterRequest $request)
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
        $savedItems = array();
        foreach ($validatedData['items'] as $key => $json) {
            $data = json_decode($json, true);
            $item = new Items();
            $item->purchase_id = $validatedData['purchase_id'];
            $item->item_id = $data['id'];
            $item->agree = 1;
            $item->save();
            $savedItems[] = Items::find($item->id);
        }

        return response()->json(['items' => $savedItems], 200);
    }

    /**
     * 在庫一覧
     *
     * @param ItemsListRequest $request
     */
    public function itemsList(ItemsListRequest $request)
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
        $user = User::find($validatedData["user_id"]);
        $shop_id = "";
        if ($user->role > 4) {
            $staff = Staff::where("system_user_id", $user->id)->first();
            $shop_id = $staff->shop_id;
            $validatedData["shop_id"] = $shop_id;
        }
        $items = Items::getItemsList($validatedData);
        $itemsList = array();
        foreach ($items as $key => $item) {
            $newItem = array();
            $newItem["id"] = str_pad($item->id, 4, '0', STR_PAD_LEFT);
            $newItem["purchase_id"] = str_pad($item->purchase_id, 4, '0', STR_PAD_LEFT);
            $newItem["customer_id"] = $item->customer_id;
            $newItem["result"] = $item->result;
            $newItem["purchase_date"] = $item->purchase_date;
            $newItem["officer_name"] = $item->officer_name;
            $newItem["shop_name"] = $item->shop_name;
            // customer
            $newItem["name"] = $item->name;
            $newItem["name_kana"] = $item->name_kana;
            $newItem["phone_number"] = $item->phone_number1 ? $item->phone_number1 : $item->phone_number2;
            $newItem["address"] = $item->address1 . $item->address2 . $item->address3;
            $newItem["type"] = $item->type;

            $newItem["category1"] = $item->category1;
            $newItem["category2"] = $item->category2;
            $newItem["category3"] = $item->category3;
            $newItem["category4"] = $item->category4;
            $newItem["category5"] = $item->category5;
            $newItem["category6"] = $item->category6;
            $newItem["images"] = $item->images;
            $newItem["image_files"] = $item->image_files;
            $newItem["item_name"] = $item->item_name;
            $newItem["amount"] = $item->amount;
            $newItem["gold_seeds"] = $item->gold_seeds;
            $newItem["g_face_value"] = $item->g_face_value;
            $newItem["purchase_price"] = $item->request_price;
            $newItem["highest_check_price"] = $item->highest_check_price;
            $newItem["sales_forecast"] = $item->sales_forecast;
            $newItem["sales_price"] = $item->sales_price;

            $newItem["tentative_appraisal_date"] = $item->tentative_appraisal_date;
            $newItem["tentative_appraisal_price"] = $item->tentative_appraisal_price;
            $newItem["actual_appraisal_date"] = $item->actual_appraisal_date;
            $newItem["actual_appraisal_price"] = $item->actual_appraisal_price;
            
            $newItem["postage"] = $item->postage;
            $newItem["profit_forecast"] = $item->profit_forecast;
            $newItem["profit_price"] = $item->profit_price;
            $newItem["wholesale_destination"] = $item->wholesale_destination;
            $newItem["payment_date"] = $item->payment_date;
            $newItem["wholesale_date"] = $item->wholesale_date;
            $newItem["note1"] = $item->note1;
            $newItem["note2"] = $item->note2;
            $newItem["selected"] = false;
            $itemsList[] = $newItem;
        }
        return response()->json(['items' => $itemsList, 'shop_id' => $shop_id], 200);
    }

    /**
     * 商品更新API
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
        $validatedData = $request->validated();

        return response()->json(['message' => 'OK'], 200);
    }

    /**
     * 商品削除API
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
