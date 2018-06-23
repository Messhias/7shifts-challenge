<?php

namespace App\Http\Controllers\TimePunches;

use Illuminate\Routing\Controller as BaseController;
use Illuminate\Http\Request;
use App\Exceptions\GenericException;
use App\Exceptions\ValidationException;
use App\Exceptions\NotFoundException;
use ApiResponse;
use App\Classes\TimePunches as PunchesClass;
use Log;

class TimePunchesController extends BaseController
{

    public function test()
    {
        try {
            ApiResponse::setAsSuccess()->setPayload("Welcome to 7Shifts API - By Fabio William Conceição");
        } catch (\Exception $e) {
            $message = "Error";
            Log::error($message);
            Log::error($e);
            ApiResponse::setAsFail()->setStatusMessage($message);
        }

        return ApiResponse::get();
    }

    public function submit(Request $request, $id)
    {
        try {
            $data = new PunchesClass($request->input('data'));
            ApiResponse::setAsSuccess()->setPayload($data->weeklyReport());
        } catch (\Exception $e) {
            $message = "Error";
            Log::error($message);
            Log::error($e);
            ApiResponse::setAsFail()->setStatusMessage($message);
        }

        return ApiResponse::get();
    }
}
