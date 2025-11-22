import { Radio } from "@/design/components/demo/components/radio/radiobutton"
import { useState } from "react";

export const RadioButtonComponent = () => {
    const [selectedValue, setSelectedValue] = useState('a');

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSelectedValue(event.target.value);
    };
    return (
        <>
            <div style={{ padding: '20px' }}>
                <div style={{display: 'flex'}}>
                    <Radio
                        checked={selectedValue === 'a'}
                        onChange={() => handleChange}
                        value="a"
                        disableRipple={true}
                        color="primary"
                    />
                    <Radio
                        checked={selectedValue === 'a'}
                        onChange={() => handleChange}
                        value="b"
                        disabled
                    />
                </div>
                <div style={{display: 'flex'}}>
                    <Radio
                        onChange={() => handleChange}
                        value="a"
                        disableRipple={true}
                        color="primary"
                    />
                    <Radio
                        onChange={() => handleChange}
                        value="b"
                        disabled
                    />
                </div>
            </div>
        </>
    )
}

