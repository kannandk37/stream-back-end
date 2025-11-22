export interface RadioButtonProp {
    value?:string
    label?:string
    color?: 'primary' | 'secondary';
    onClick?: any;
    children?: any | React.ReactNode;
    disabled?: boolean;
    style?: React.CSSProperties | any;
    disableRipple?: boolean;
    size?: 'medium' | 'small';
    checked?: any;
    onChange?:() => void;
}