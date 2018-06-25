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
 * CLASS FOR WEEKLY REPORT
 *
 *
 *
 * @package    7Shifts Code Challenge
 * @author     Fabio William Conceição <messhias@gmail.com>
 * @license    MIT
 * @since      1.0
 */

namespace App\Classes;

use App\Classes\Dates;
use App\Classes\DailyOvertimeThreshold;
use App\Classes\WageCalculate as Payment;

class TimePunches
{
    protected $data;
    protected $dates;
    protected $arrays;
    protected $threshold;
    protected $workingDays = [];
    protected $report;

    public function __construct($data)
    {
        $this->data = $data;
        $this->dates = new Dates();
    }

    public function weeklyReport()
    {
        foreach ($this->data['userTimePunches'] as $key => $value) {

            if($this->dates->sameWeek($value['clockedOut'], $value['clockedIn']))
            {
                $this->workingDays[$this->dates->monthName($value['created'])][$this->dates->weekOfMonth($value['created'])][] = array(
                    'hours' => $this->dates->hoursDiff($value),
                    'clockedIn' => $value['clockedIn'],
                    'clockedOut' => $value['clockedOut']
                );
            }
        }

        $this->report['week'] = $this->calculateThreshold($this->workingDays);
        $this->report['payment'] = $this->createPayment($this->report);
        $this->report['data'] = $this->data;

        return $this->report;
    }

    private function createPayment($report)
    {
        $payment = new Payment($report, $this->data);

        return $payment->weekly();
    }

    private function calculateThreshold($data)
    {
        $this->threshold = new DailyOvertimeThreshold($data, $this->data['userLocation']);
        return $this->threshold->weekly();
    }
}
