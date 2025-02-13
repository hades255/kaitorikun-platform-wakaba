<?php

namespace App\Http\Requests\Index;

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

    protected function failedValidation(Validator $validator) {}

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
            'id' => [
                'nullable',
                'integer',
            ],
            'shop_id' => [
                'nullable',
                'string',
            ],
            'name_kana' => [ // カタカナ名
                'nullable',
                'string',
            ],
            'phone_number' => [ // 電話番号
                'nullable',
                'string',
            ],
            'address1' => [ // 住所
                'nullable',
                'string',
            ],
            'address2' => [ // 住所
                'nullable',
                'string',
            ],
            'birthday' => [ // 生年月日
                'nullable',
                'date',
                'date_format:Y-m-d',
            ],
        ];
    }
    public function withValidator(Validator $validator) {}
    // バリデーションエラーメッセージのカスタマイズ
    public function messages()
    {
        return [];
    }
}
