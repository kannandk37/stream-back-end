import { FormControl, Radio, RadioGroup } from '@mui/material';
import { FormControlLabel } from '@mui/material';
import { RadioButtonProp } from '@/design/components/demo/components/radio/radiobutton/props';
import { useStyles } from '@/design/components/demo/components/radio/radiobutton/style';

const RadioButton = ({ color, onClick, disabled, style, disableRipple, size, label, value, checked, onChange }: RadioButtonProp) => {
    const styles = useStyles({ size, label, disabled, color });

    return (
        <FormControl>
            <RadioGroup >
                <FormControlLabel
                    control={
                        <Radio
                            onClick={onClick}
                            disabled={disabled}
                            className={styles.classes.root}
                            disableRipple={disableRipple}
                            style={style}
                            size={size}
                            color={color}
                            value={value}
                            checked={checked}
                            onChange={onChange}
                        />
                    }
                    label={label}
                />
            </RadioGroup>
        </FormControl>
    );
};
export { RadioButton as Radio };