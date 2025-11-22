import React, { useState } from 'react'
import { TimePicker } from '@/design/components/timepicker';
// import ClockDisable from '@/assets/svg/clockdisable.svg?react';
// import Clock from '@/assets/svg/clock.svg?react';
// import LeftArrow from '@/assets/svg/leftarrow.svg?react';
// import RightArrow from '@/assets/svg/rightarrow.svg?react';

function TimePickerComponent() {
    const [startTime, setStartTime] = useState<Date>(null);


    const handleStartTime = (value: Date) => {
        let time = value;
        time.setFullYear(1970, 1, 1);
        setStartTime(time);
    };
    return (
        <>
            <div style={{ margin: '50px', display: 'flex' }}>
                <div>
                    <TimePicker
                        value={startTime}
                        onChange={handleStartTime}
                        // clockIconDisable={ClockDisable}
                        // clockIconEnable={Clock}
                        // leftArrow={LeftArrow}
                        // rightArrow={RightArrow}
                    />
                </div>
                <div style={{ marginLeft: '100px' }}>
                    <h3>Diasble: </h3>
                    <TimePicker
                        value={startTime}
                        onChange={handleStartTime}
                        disabled={true}
                        error={true}
                        helperText='This field is required*'
                        // clockIconDisable={ClockDisable}
                        // clockIconEnable={Clock}
                        // leftArrow={LeftArrow}
                        // rightArrow={RightArrow}
                    />
                    <h3>Error: </h3>

                    <TimePicker
                        value={startTime}
                        onChange={handleStartTime}
                        error={true}
                        helperText='This field is required*'
                        // clockIconDisable={ClockDisable}
                        // clockIconEnable={Clock}
                        // leftArrow={LeftArrow}
                        // rightArrow={RightArrow}
                    />
                </div>

            </div>
        </>
    )
}

export default TimePickerComponent