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
 * CALCULATE THE DAYLI OVERTIME THRESHOLD
 *
 * This class take the user object data where inside has the month, week number of the month
 * and the hours number that they worked and calculate their overtime wage (if has).
 *
 * @package    7Shifts Code Challenge
 * @author     Fabio William Conceição <messhias@gmail.com>
 * @license    MIT
 * @since      1.0
 */

namespace app\Classes;

class DailyOvertimeThreshold
{
    protected $data;
    protected $rules;
    private $overtime;

    function __construct($data, $rules)
    {
        $this->data  = $data;
        $this->rules = $rules;
        $this->overtime = 0;
    }

    public function getOvertime()
    {
        return $this->overtime;
    }

    public function weekly()
    {
        $weekHours = 0;
        $days = 0;
        foreach ($this->data as $key => $month) {
            foreach ($month as $weekKey => $week) {
                foreach ($week as $dayKey => $day) {
                    $weekHours += ($day['hours']/60) * 100;
                }
            }
        }

        if ($weekHours > $this->rules['labourSettings']['weeklyOvertimeThreshold']) {
            $this->overtime = $weekHours - $this->rules['labourSettings']['weeklyOvertimeThreshold'];
        }

        return [
            'weekHours' =>  $weekHours,
            'overtime'  =>  $this->overtime
        ];
    }
}
