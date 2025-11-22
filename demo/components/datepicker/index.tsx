import { useState } from "react";
import { DatePicker } from "@/design/components/datepicker/simple"
import { DesignIconsCalenderOutlineIcon } from "@/design/icons/calender/outline";
import { DesignIconsDownArrowOutlineIcon } from "@/design/icons/down-arrow/outline";
import { DesignIconsLeftArrowOutlineIcon } from "@/design/icons/left-arrow/outline";
import { DesignIconsRightArrowOutlineIcon } from "@/design/icons/right-arrow/outline";

export const DatePickerComponent = () => {
    const [selectedDate, setSelectedDate] = useState<Date | null>(null);

    return (
        <>
            <div style={{ gap: '50px', display: 'flex', padding: '20px' }}>
                <div>
                    <DatePicker
                        value={selectedDate}
                        onChange={(newValue) => {
                            setSelectedDate(newValue);
                        }}
                        calendarIcon={<DesignIconsCalenderOutlineIcon color="var(--grey-10)" />}
                        showMonthAndYear
                        placeholder="dd/mm/yyyy"
                        downArrow={DesignIconsDownArrowOutlineIcon}
                        rightArrow={DesignIconsRightArrowOutlineIcon}
                        leftArrow={DesignIconsLeftArrowOutlineIcon}
                    />
                </div>
                <div >
                    <DatePicker
                        value={selectedDate}
                        onChange={(newValue) => {
                            setSelectedDate(newValue);
                        }}
                        calendarIcon={<DesignIconsCalenderOutlineIcon color="var(--grey-10)" />}
                        disablePast
                        minDate={new Date(new Date().setDate(new Date().getDate() - 1))}
                        downArrow={DesignIconsDownArrowOutlineIcon}
                        rightArrow={DesignIconsRightArrowOutlineIcon}
                        leftArrow={DesignIconsLeftArrowOutlineIcon}
                    />
                </div>
                <div >
                    <DatePicker
                        helperText="This field is required*"
                        error={true}
                        value={selectedDate}
                        onChange={(newValue) => {
                            setSelectedDate(newValue);
                        }}
                        calendarIcon={<DesignIconsCalenderOutlineIcon color="var(--grey-10)" />}
                        minDate={new Date(new Date().setDate(new Date().getDate() - 1))}
                        downArrow={DesignIconsDownArrowOutlineIcon}
                        rightArrow={DesignIconsRightArrowOutlineIcon}
                        leftArrow={DesignIconsLeftArrowOutlineIcon}
                    />
                </div>
                <div>
                    <DatePicker
                        value={selectedDate}
                        onChange={(newValue) => {
                            setSelectedDate(newValue);
                        }}
                        calendarIconDisable={<DesignIconsCalenderOutlineIcon color="var(--grey-30)" />}
                        disabled
                    />
                </div>
                <div style={{ marginLeft: '100px' }}>
                    
                    <br />
                   
                </div>
            </div>
        </>
    )
}