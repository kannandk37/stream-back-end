import { FormControl, Radio, RadioGroup } from '@mui/material';
import { FormControlLabel } from '@mui/material';
import { makeStyles } from "tss-react/mui";
import { Theme } from "@emotion/react";

const RadioButton = ({ color, onClick, disabled, style, disableRipple, variant, size, label, value, checked, onChange }: RadioButtonProp) => {
    const styles = useStyles({ variant, size, label, disabled, color });

    return (
        <FormControl>
            <RadioGroup >
                <FormControlLabel
                    control={
                        <Radio
                            onClick={onClick}
                            disabled={disabled}
                            disableRipple={disableRipple}
                            style={style}
                            size={size}
                            color={color}
                            value={value}
                            checked={checked}
                            onChange={onChange}
                            className={styles.classes.root}
                        />
                    }
                    label={label}
                />
            </RadioGroup>
        </FormControl>
    );
};
export { RadioButton as Radio };

export const useStyles = makeStyles<Partial<RadioButtonProp>>()((theme: Theme, { variant, size, label, disabled, color }) => ({
    root: {

        color: color == 'primary' ? 'var(--secondary-30) !important' : 'var(--color-grey-30)',
        "& .MuiSvgIcon-root": {
            width: '20px !important',
            height: '20px !important',

        },
        "&.MuiButtonBase-root": {
            padding: '3px !important',  
        },
        '&:hover': {
                backgroundColor: 'var(--secondary-60)  !important',
                color: 'var(--secondary-30) !important',
                padding: '3px !important'
            },
            '&:active': {
                backgroundColor: 'var(--secondary-50)  !important',
                color: 'var(--secondary-30) !important',
                padding: '3px !important'
            }
    }
}));


export interface RadioButtonProp {
    value?: string
    label?: string
    color?: 'primary' | 'secondary';
    onClick?: any;
    children?: any | React.ReactNode;
    disabled?: boolean;
    style?: React.CSSProperties | any;
    disableRipple?: boolean;
    size?: 'medium' | 'small';
    variant?: 'outline' | 'filled' | 'standard';
    checked?: any;
    onChange?: () => void;
}