<?php

namespace App\Classes;

use App\Classes\Dates;

/**
 * CLASS TO CALCULATE USER TIME TimePunches
 */
class TimePunches
{
    protected $data;
    protected $dates;
    protected $arrays;
    protected $workingDays = [];
    const WEEK_HOURS = 40;

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
                $this->workingDays[] = array(
                    "{$this->dates->monthName($value['created'])}"
                        => array (
                            "{$this->dates->weekOfMonth($value['created'])}"
                                => array ( 'hours' => $this->dates->hoursDiff($value),
                                'clockedIn' => $value['clockedIn'],
                                'clockedOut' => $value['clockedOut']
                            )
                    )
                );
            }
        }


        return $this->workingDays;
    }

}
