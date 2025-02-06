<?php

namespace App\Http\Controllers\CustomerManage;

use App\Http\Controllers\Controller;
use App\Http\Requests\Index\CustomerRequest;
use App\Http\Requests\Store\CustomerRequest as StoreCustomerRequest;
use App\Models\Customer;
use App\Models\City;
use App\Models\Prefectures;
use App\Models\Purchase;
use App\Models\Shop;
use Carbon\Carbon;

class PurchaseController extends Controller
{
    /**
     * 買取計算書一覧取得API
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
        $validatedData = $request->validated();

        return response()->json(['message' => 'OK'], 200);
    }

    /**
     * 買取計算書削除API
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
