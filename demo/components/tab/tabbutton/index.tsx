
import { makeStyles } from "tss-react/mui";
import { Theme } from "@emotion/react";
import { Tab, Tabs } from "@mui/material";

const TabButton = ({ color, onClick, disabled, style, disableRipple, size, label, value, onChange, children }: RadioButtonProp) => {
    const styles = useStyles({ size, label, disabled, color });

    return (
        <Tabs
            value={value}
            onChange={onChange}
        >
            <Tab
                disabled={disabled}
                className={styles.classes.root}
                disableRipple={disableRipple}
                style={style}
                label={label}
                value={value}
                onClick={onClick}
            />
            {children}
        </Tabs>
    );
};
export { TabButton as Tab };

export const useStyles = makeStyles<Partial<RadioButtonProp>>()((theme: Theme, { size, label, disabled, color }) => ({
    root: {
        padding: '11px 20px !important',
        borderRadius: '12px !important',
        backgroundColor: color === 'primary' ? 'var(--secondary-60)' : 'transparent',
        textTransform: 'capitalize',
        fontFamily: 'rootFontFamilyMedium !important',
        fontSize: 14,
        color: 'var(--black-30)',
        fontWeight: 500,
        "&.MuiButtonBase-root:hover": {
            backgroundColor: color === 'primary' ? 'var(--secondary-50)' : 'transparent',
            color: color === 'primary' ? 'var(--black-30)' : 'var(--black-30)',
        },
        "&.MuiButtonBase-root:active": {
            backgroundColor: color === 'primary' ? 'var(--secondary-30)' : 'transparent',
            color: color === 'primary' ? 'var(--white-10)' : 'var(--black-30)',
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
    onChange?: () => void;
    wrapped?: boolean;
    icon?: string | React.ReactElement;
    iconPosition?: 'top' | 'bottom' | 'start' | 'end';
}