<?php

namespace App\Http\Controllers\StaffManage;

use App\Http\Controllers\Controller;
use App\Http\Requests\Index\StaffRequest;
use App\Http\Requests\Store\StaffRequest as StoreStaffRequest;
use App\Models\City;
use App\Models\Guarantor;
use App\Models\Prefectures;
use App\Models\Shop;
use App\Models\Staff;
use App\Models\User;
use Illuminate\Support\Facades\Crypt;

class StaffController extends Controller
{
    /**
     * スタッフ一覧取得API
     *
     * @param StaffRequest $request
     * @return 
     */
    public function index( StaffRequest $request)  {
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
        $prefectures = Prefectures::select(['id', 'name'])->get();
        $cities = City::select(['id', 'prefecture_id', 'name'])->get();
        $shops = Shop::select(['id', 'name'])->get();
        $guarantors = Guarantor::select(['id', 'name'])->get();
        $staff = Staff::where('system_user_id', $validatedData["user_id"])->first();

        return response()->json([
            "prefectures" => $prefectures,
            "cities" => $cities,
            "shops" => $shops,
            "guarantors" => $guarantors,
            "staff" => $staff,
        ]);
    }

    public function initDatas()
    {
        $prefectures = Prefectures::select(['id', 'name'])->get();
        $cities = City::select(['id', 'prefecture_id', 'name'])->get();
        $shops = Shop::select(['id', 'name'])->get();
        $guarantors = Guarantor::select(['id', 'name'])->get();

        return response()->json([
            "prefectures" => $prefectures,
            "cities" => $cities,
            "shops" => $shops,
            "guarantors" => $guarantors,
        ]);
    }

    /**
     * スタッフ登録API
     *
     * @param StoreStaffRequest $request
     */
    public function createOrUpdate(StoreStaffRequest $request)
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
        $validatedData = $request->validated();
        $validatedData['password'] = Crypt::encrypt($validatedData['password']);

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
                    $validatedData['history_path'] = $value;
                }
                if (isset($validatedData['working_history_type'])) {
                    if ($key == 3) {
                        $validatedData['working_history_path'] = $value;
                    }
                    if (isset($validatedData['contract_type'])) {
                        if ($key == 4) {
                            $validatedData['contract_path'] = $value;
                        }
                    }
                } else {
                    if (isset($validatedData['contract_type'])) {
                        if ($key == 3) {
                            $validatedData['contract_path'] = $value;
                        }
                    }
                }
            } else {
                if ($key == 0) {
                    if (isset($validatedData['identification_id1'])) {
                        $validatedData['identification_path1'] = $value;
                    } elseif (isset($validatedData['identification_id2'])) {
                        $validatedData['identification_path2'] = $value;
                    } 
                } elseif ($key == 1) {
                    $validatedData['history_path'] = $value;
                }
                if (isset($validatedData['working_history_type'])) {
                    if ($key == 2) {
                        $validatedData['working_history_path'] = $value;
                    }
                    if (isset($validatedData['contract_type'])) {
                        if ($key == 3) {
                            $validatedData['contract_path'] = $value;
                        }
                    }
                } else {
                    if (isset($validatedData['contract_type'])) {
                        if ($key == 2) {
                            $validatedData['contract_path'] = $value;
                        }
                    }
                }
            }
        }

        $checkUser = User::where('email', $validatedData['staff_id'])->first();
        if (!isset($checkUser) && isset($validatedData["email"])) {
            $staff = Staff::where('email', $validatedData['email'])->first();
            if (isset($staff)) {
                $checkUser = User::where('email', $validatedData["email"])->first();
            }
        }
        // 更新
        if (isset($checkUser)) {
            $staff = Staff::where('staff_id', $validatedData['staff_id'])->first();
            if (isset($validatedData['email'])) {
                $staff->email = $validatedData['email'];
                $checkUser->email = $validatedData['email'];
                $checkUser->save();
            }
            $staff->password = $validatedData['password'];
            $staff->shop_id = $validatedData['shop_id'];
            $staff->user_type = $validatedData['user_type'];
            $staff->name = $validatedData['name'];
            $staff->name_kana = $validatedData['name_kana'];
            $staff->phone_number = $validatedData['phone_number'];
            $staff->birthday = $validatedData['birthday'];
            $staff->gender = $validatedData['gender'];
            $staff->zipcode = $validatedData['zipcode'];
            $staff->address1 = $validatedData['address1'];
            $staff->address2 = $validatedData['address2'];
            $staff->address3 = $validatedData['address3'];
            if (isset($validatedData['identification_id1'])) {
                $staff->identification_id1 = $validatedData['identification_id1'];
                $staff->identification_type1 = $validatedData['identification_type1'];
                $staff->identification_path1 = $validatedData['identification_path1'];
            }
            if (isset($validatedData['identification_id2'])) {
                $staff->identification_id2 = $validatedData['identification_id2'];
                $staff->identification_type2 = $validatedData['identification_type2'];
                $staff->identification_path2 = $validatedData['identification_path2'];
            }
            $staff->history_type = $validatedData['history_type'];
            $staff->history_path = $validatedData['history_path'];
            if (isset($validatedData['working_history_type'])) {
                $staff->working_history_type = $validatedData['working_history_type'];
                $staff->working_history_path = $validatedData['working_history_path'];
            }
            if (isset($validatedData['contract_type'])) {
                $staff->contract_type = $validatedData['contract_type'];
                $staff->contract_path = $validatedData['contract_path'];
            }
            $staff->guarantor_id = $validatedData['guarantor_id'];
            $staff->save();
            // 新規登録
        } else {
            $user = new User();
            $user->name = $validatedData['name'];
            $user->email = $validatedData['staff_id'];
            $user->password = $validatedData['password'];
            $user->role = $validatedData['user_type'] + 1;
            $user->save();

            $staff = new Staff();
            $staff->staff_id = $validatedData['staff_id'];
            $staff->system_user_id = $user->id;
            if (isset($validatedData['email'])) {
                $staff->email = $validatedData['email'];
                $user->email = $validatedData['email'];
                $user->save();
            }
            $staff->password = $validatedData['password'];
            $staff->shop_id = $validatedData['shop_id'];
            $staff->user_type = $validatedData['user_type'];
            $staff->name = $validatedData['name'];
            $staff->name_kana = $validatedData['name_kana'];
            $staff->phone_number = $validatedData['phone_number'];
            $staff->birthday = $validatedData['birthday'];
            $staff->gender = $validatedData['gender'];
            $staff->zipcode = $validatedData['zipcode'];
            $staff->address1 = $validatedData['address1'];
            $staff->address2 = $validatedData['address2'];
            $staff->address3 = $validatedData['address3'];
            if (isset($validatedData['identification_id1'])) {
                $staff->identification_id1 = $validatedData['identification_id1'];
                $staff->identification_type1 = $validatedData['identification_type1'];
                $staff->identification_path1 = $validatedData['identification_path1'];
            }
            if (isset($validatedData['identification_id2'])) {
                $staff->identification_id2 = $validatedData['identification_id2'];
                $staff->identification_type2 = $validatedData['identification_type2'];
                $staff->identification_path2 = $validatedData['identification_path2'];
            }
            $staff->history_type = $validatedData['history_type'];
            $staff->history_path = $validatedData['history_path'];
            if (isset($validatedData['working_history_type'])) {
                $staff->working_history_type = $validatedData['working_history_type'];
                $staff->working_history_path = $validatedData['working_history_path'];
            }
            if (isset($validatedData['contract_type'])) {
                $staff->contract_type = $validatedData['contract_type'];
                $staff->contract_path = $validatedData['contract_path'];
            }
            $staff->guarantor_id = $validatedData['guarantor_id'];
            $staff->save();
        }

        return response()->json(['message' => 'OK'], 200);
    }

    /**
     * スタッフ退会API
     *
     * @param StaffRequest $request
     * @return 
     */
    public function destroy( StaffRequest $request)  {
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
        User::find($validatedData['user_id'])->delete();
        Staff::where('system_user_id', $validatedData['user_id'])->delete();

        return response()->json(['message' => 'OK'], 200);
    }
}
