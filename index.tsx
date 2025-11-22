import React from 'react';
import { Button } from '@mui/material';
import { SimpleButtonProp } from "@/design/components/button/simple/props";
import { useStyles } from '@/design/components/button/simple/style';
import "@/design/components/button/simple/style/index.css";
import { CircularProgressBar } from '@/design/components/progress/circular';

export const SimpleButton = ({ component,onClick,endIcon, children, disabled, style, startIcon, disableRipple, width, color, variant, height, iconColor, isLoading, loaderColor, loaderSize, }: SimpleButtonProp) => {
    const styles = useStyles({ width, color, variant, disabled, height, iconColor, isLoading, loaderColor, loaderSize })
    return (
        <Button
            className={styles.classes.root}
            onClick={!isLoading && onClick}
            disabled={disabled}
            style={style}
            endIcon={endIcon}
            startIcon={startIcon}
            disableRipple={disableRipple}
            component={component}
        >
             {isLoading ? <CircularProgressBar color={loaderColor} size={loaderSize}/> : children }
        </Button>
    )
}