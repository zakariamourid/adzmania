<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;


class SignupRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array|string>
     */
    public function rules(): array
    {
        return [
            'name'=>'required',
            'email'=>'required|email|unique:users,email',
             'password' => [
            'required',
            'string',
            'min:8',             // must be at least 8 characters in length
    ],
            
        ];
    }
}