<?php

namespace App\Http\Controllers\TimePunches;

use Illuminate\Routing\Controller as BaseController;
use Illuminate\Http\Request;
use App\Exceptions\GenericException;
use App\Exceptions\ValidationException;
use App\Exceptions\NotFoundException;
use ApiResponse;

class TimePunchesController extends BaseController
{
    public function test()
    {
        try {
            ApiResponse::setAsSuccess()->setPayload("ok");
        } catch (\Exception $e) {
            $message = "Error";
            Log::error($message);
            Log::error($e);
            ApiResponse::setAsFail()->setStatusMessage($message);
        }

        return ApiResponse::get();
    }
}
