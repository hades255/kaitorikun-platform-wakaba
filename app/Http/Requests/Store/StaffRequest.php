<?php

namespace App\Http\Requests\Store;

use App\Enums\HasError;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Contracts\Validation\Validator;

class StaffRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    protected function failedValidation(Validator $validator)
    {
    }

    public function getValidator()
    {
        return $this->getValidatorInstance();
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'staff_id' => [ // スタッフID
                'required',
                'string',
            ],
            'email' => [ // メールアドレス
                'nullable',
                'string',
            ],
            'password' => [ // パスワード
                'required',
                'string',
            ],
            'shop_id' => [ // 店舗ID
                'required',
                'integer',
            ],
            'user_type' => [ // 種別
                'required',
                'integer',
            ],
            'name' => [ // お名前
                'required',
                'string',
            ],
            'name_kana' => [ // カタカナ名
                'required',
                'string',
            ],
            'phone_number' => [ // お電話番号
                'required',
                'string',
            ],
            'birthday' => [ // 生年月日
                'required',
                'date',
                'date_format:Y-m-d',
            ],
            'gender' => [ // 性別
                'required',
                'integer',
            ],
            'zipcode' => [ // 郵便番号
                'required',
                'string',
            ],
            'address1' => [ // 都道府県
                'required',
                'integer',
            ],
            'address2' => [ // 市町村
                'required',
                'integer',
            ],
            'address3' => [ // 住所詳細
                'required',
                'string',
            ],
            'identification_id1' => [ // 本人確認書類ID
                'nullable',
                'integer',
            ],
            'identification_type1' => [
                'nullable',
                'string',
            ],
            'identification_path1' => [
                'nullable',
                'string',
            ],
            'identification_id2' => [ // 本人確認書類ID
                'nullable',
                'integer',
            ],
            'identification_type2' => [
                'nullable',
                'string',
            ],
            'identification_path2' => [
                'nullable',
                'string',
            ],
            'history_type' => [
                'nullable',
                'string',
            ],
            'history_path' => [
                'nullable',
                'string',
            ],
            'working_history_type' => [
                'nullable',
                'string',
            ],
            'working_history_path' => [
                'nullable',
                'string',
            ],
            'guarantor_id' => [ // スタッフNO（開始）
                'required',
                'integer',
            ],
            'contract_type' => [
                'nullable',
                'string',
            ],
            'contract_path' => [
                'nullable',
                'string',
            ],
        ];
    }
    public function withValidator(Validator $validator)
    {
    }
    // バリデーションエラーメッセージのカスタマイズ
    public function messages()
    {
        return [
            // 'page.required' => 'ページは必須です。',
            // 'per_page.required' => '１ページあたりの件数は必須です。',
            // 'email_account_setting_id.required' => '受信元アカウントは必須です。',
            // 'column.required' => '文字検索対象は必須です。',
            // 'has_error.required' => 'エラー判定は必須です。',
        ];
    }
}
