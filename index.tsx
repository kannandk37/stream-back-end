import { IconButton as MUIIconButon } from '@mui/material';
import { IconButtonProp } from '@/design/components/button/icon/props';
import { useStyles } from '@/design/components/button/icon/style';
// import "@/design/components/button/icon/style/index.css";

export const IconButton = ({ color, onClick, onMouseEnter, onMouseLeave, children, disabled, style, disableRipple, mode, variant, size }: IconButtonProp) => {
    const styles = useStyles({ disabled, mode, variant, size })
    return (
        <MUIIconButon
            className={styles.classes.root}
            onClick={onClick}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            disabled={disabled}
            disableRipple={disableRipple}
            style={style}
        >
            {children}
        </MUIIconButon>
    )
}