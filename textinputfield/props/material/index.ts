export interface TextInputFieldProps {
    label?: string | any;
    variant?: 'outlined' | 'filled' | 'standard';
    size?: 'small' | 'medium';
    value?: string | number | any;
    error?: boolean;
    helperText?: string;
    type?: string | any;
    onChange?: (e: any) => void;
    disabled?: boolean,
    placeholder?: string,
    min?: number,
    onFocus?: () => void,
    onBlur?: () => void,
    key?: string,
    // Todo
    autoFocus?: boolean
    hideBorder?: boolean
    width?: 'extraSmall' | 'small' | 'medium' | 'fullWidth' | string
    maxLength?: number,
    inputProps?: any
    trim?: boolean,
    InputLabelProps?: any;
    visibleThePassword?: boolean;
    showPasswordIcon?: boolean;
    multiline?: boolean;
    rows?: number;
    visibleTheEndIcon?: boolean;
    visibleTheStartIcon?: boolean;
    helperTextPriority?: 'low' | 'high';
    startIcon?: React.ReactNode;
    passwordVisibleOn?: React.ReactNode;
    passwordVisibleOff?: React.ReactNode;
    endIcon?: React.ReactNode;
    onPressEnter?: (event: React.KeyboardEvent<HTMLDivElement>) => void;
    startText?: string;
    style?: any,
    isLabelStyle?: boolean;
    disableUnderline?: boolean
    shrinkLabel?: boolean;
    success?: boolean;
    pattern?: string;
    color?: string;
    onClickCountryCode?: () => void;
    downArrow?: React.ReactNode;
    toUppercase?: boolean,
    undoDisabledColor?:boolean,
    borderRadius?:string,
    autoComplete?:boolean,
    showLabel?:boolean,
    name?:string
    placeholderLabel?:boolean,
    clearIcon?: boolean,
}
