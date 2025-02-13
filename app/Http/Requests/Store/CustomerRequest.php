<?php

namespace App\Http\Requests\Store;

use App\Enums\HasError;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Contracts\Validation\Validator;

class CustomerRequest extends FormRequest
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
            'id' => [ // ID
                'nullable',
                'integer',
            ],
            // 'shop_id' => [ // 店舗ID
            //     'nullable',
            //     'integer',
            // ],
            // 'type' => [ // 種別
            //     'nullable',
            //     'string',
            // ],
            'name' => [ // 名前
                'required',
                'string',
            ],
            // 'name_kana' => [ // カタカナ名
            //     'nullable',
            //     'string',
            // ],
            'phone_number1' => [ // 電話番号(自宅)
                'nullable',
                'string',
            ],
            'phone_number2' => [ // 電話番号(携帯)
                'nullable',
                'string',
            ],
            // 'birthday' => [ // 生年月日
            //     'nullable',
            //     'date',
            //     'date_format:Y-m-d',
            // ],
            // 'gender' => [ // 性別
            //     'nullable',
            //     'integer',
            // ],
            // 'zipcode' => [ // 郵便番号
            //     'nullable',
            //     'string',
            // ],
            // 'address1' => [ // 都道府県
            //     'nullable',
            //     'integer',
            // ],
            // 'address2' => [ // 市町村
            //     'nullable',
            //     'integer',
            // ],
            // 'address3' => [ // 住所詳細
            //     'nullable',
            //     'string',
            // ],
            // 'identification_id1' => [ // 本人確認書類ID
            //     'nullable',
            //     'integer',
            // ],
            // 'identification_type1' => [
            //     'nullable',
            //     'string',
            // ],
            // 'identification_path1' => [
            //     'nullable',
            //     'string',
            // ],
            // 'identification_id2' => [ // 本人確認書類ID
            //     'nullable',
            //     'integer',
            // ],
            // 'identification_type2' => [
            //     'nullable',
            //     'string',
            // ],
            // 'identification_path2' => [
            //     'nullable',
            //     'string',
            // ],
            // 'note' => [
            //     'nullable',
            //     'string',
            // ],
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
