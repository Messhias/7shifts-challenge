<?php

/**
 * File contents for class
 *
 *
 * @package    7Shifts Code Challenge
 * @author     Fabio William Conceição <messhias@gmail.com>
 * @license    MIT
 * @since      1.0
 */

/**
 * Calculate the payment based on week hours and overtime hours.
 *
 *
 * @package    7Shifts Code Challenge
 * @author     Fabio William Conceição <messhias@gmail.com>
 * @license    MIT
 * @since      1.0
 */

namespace app\Classes;

class WageCalculate
{
    protected $data;
    protected $rules;

    public function __construct($data, $rules)
    {
        $this->data  = $data;
        $this->rules = $rules;
    }

    public function weekly()
    {
        $weekHours              = $this->data['week']['weekHours'];
        $hourlyWage             = $this->rules['currentUser'][0]['hourlyWage'];

        $overTimeHours          = $this->data['week']['overtime'];
        $overtimeWeelMultiplier = $this->rules['userLocation']['labourSettings']['weeklyOvertimeMultiplier'];
        $overtimeHourWage       = $hourlyWage * $overTimeHours;

        $payHours               = $weekHours * $hourlyWage;
        $overtimePayment        = $overTimeHours * $overtimeHourWage;

        return [
            'weekPayment' => $payHours,
            'weekOvertimePayment' => $overtimePayment
        ];
    }
}
