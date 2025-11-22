import { makeStyles } from "tss-react/mui";

export const useStyles = makeStyles()(() => ({
    // tooltip box styles
    popper: {
        '& .MuiTooltip-tooltip': {
            backgroundColor: 'var(--black-30) !important',
            borderRadius: '8px',
            padding: '8px 8px',
            marginLeft:"9px !important",
            maxWidth: '300px'
        }
    },
    // arrow styles 
    arrow: {
        color: 'var(--black-30)',
        position: 'absolute',
        top: '2px !important',
        left: '1px !important'
    },
  
}));