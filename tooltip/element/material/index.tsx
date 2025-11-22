import { Tooltip } from '@mui/material'
import { useStyles } from "@/design/components/tooltip/style";
import { TootlipProps } from '@/design/components/tooltip/props';
import { useEffect, useState } from 'react';
import InfoIcon from '@mui/icons-material/Info';

export const TooltipComponent = ({ children, open }: TootlipProps) => {
    const styles = useStyles();
    const [showTooltip, setShowTooltip] = useState(false);

    useEffect(() => {
        if (open) {
            setShowTooltip(true)
            setTimeout(() => {
                setShowTooltip(false)
            }, 5000);
        }
    }, [open])

    return (
        <Tooltip title={
            <>
                {children}
            </>
        } placement='right-start'
            arrow
            classes={{
                popper: styles.classes.popper,
                arrow: styles.classes.arrow
            }}
            open={showTooltip}
            onMouseEnter={() => setShowTooltip(true)}
            onMouseLeave={() => setShowTooltip(false)}
        >
            <InfoIcon />
        </Tooltip>
    )
}

export default TooltipComponent