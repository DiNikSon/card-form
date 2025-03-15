<?php

namespace App\Http\Controllers;

use App\Models\BankCard;
use DateTime;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Routing\Controller as BaseController;

class Controller extends BaseController
{
    use AuthorizesRequests, ValidatesRequests;

    public function postCard(){
        $formData = request()->all();

        $errors = [
            'credentials' => false,
            'year' => false,
            'month' => false,
            'cvc' => false,
        ];

        $errors['credentials'] = !preg_match('/^\d{16}$/', $formData['credentials']);

        if (!preg_match('/^\d+$/', $formData['year']) || !preg_match('/^\d+$/', $formData['month'])) {
            $errors['month'] = !preg_match('/^\d+$/', $formData['year']);
            $errors['year'] = !preg_match('/^\d+$/', $formData['month']);
        } else {
            $isFuture = !self::isFutureDate((int)$formData['year'], (int)$formData['month']);
            $errors['month'] = $isFuture;
            $errors['year'] = $isFuture;
        }

        $errors['cvc'] = !preg_match('/^\d{3}$/', $formData['cvc']);

        if(array_search(true, array_values($errors))){
            return response()->json(['success'=>false,'errors'=>$errors]);
        }

        if($formData['remember'])BankCard::query()->updateOrCreate(['credentials'=>$formData['credentials']],['expiration_date'=>'20'.$formData['year'].'-'.$formData['month'].'-01']);

        return response()->json(['success'=>true]);
    }

    static function isFutureDate(int $year, int $month): bool {
        //  Реализация функции проверки на будущую дату.
        //  Нужно добавить логику проверки, например, сравнение с текущей датой.
        //  Пример (необходимо адаптировать под ваши нужды):
        $currentDate = new DateTime();
        $futureDate = new DateTime("$year-$month-01"); // используем 1-е число месяца
        return $futureDate > $currentDate;
    }
}
