<?php

namespace App\Http\Requests\Index;

use App\Enums\HasError;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Contracts\Validation\Validator;

class ItemMasterRequest extends FormRequest
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
            'item_name' => [ // 商品名
                'required',
                'string',
            ],
            'category1' => [ // カテゴリー1
                'required',
                'integer',
            ],
            'category2' => [ // カテゴリー2
                'nullable',
                'string',
            ],
            'category3' => [ // カテゴリー3
                'nullable',
                'string',
            ],
            'category4' => [ // カテゴリー4
                'nullable',
                'string',
            ],
            'category5' => [ // カテゴリー5
                'nullable',
                'string',
            ],
            'category6' => [ // カテゴリー6
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
        ];
    }
}
