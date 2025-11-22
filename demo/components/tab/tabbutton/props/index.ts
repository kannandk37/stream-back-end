export interface TabButtonProp {
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
    icon?: string | React.ReactElement<unknown>;
    iconPosition?: 'top' | 'bottom' | 'start' | 'end';
}