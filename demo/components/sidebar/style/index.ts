import { makeStyles } from "tss-react/mui";

export const drawerWidth = 200;
export const useStyles = makeStyles()(() => ({
    container: {
        display: 'flex',
        width: '100%',

    },
    appbar: {
        backgroundColor: 'var(--appbar-bg-color)',
        padding: '0 20px !important',
        minHeight: '64px'
    },
    logo: {
        flex: 1,
        display: 'flex'
    },
    image: {
        width: '85.42px',
        height: '28px'
    },
    logout: {
        justifyContent: 'flex-end',
        alignItems: 'flex-start'
    },
    toolbar: {
        display: 'flex',
        alignItems: 'center',
        minHeight: '64px'
    },
    title: {
        color: 'red important'
    },
    menu: {
        height: '48px',
        '& .MuiListItemIcon-root': {
            minWidth: '32px',
        },
        marginTop: '4px',
        boxSizing: 'border-box',
        '& .MuiListItemButton-root': {
            marginLeft: '8px',
            marginRight: '8px',
            marginBottom: '4px',
            padding: '12px 20px 12px 20px',
            height: '48px',
            borderRadius: '12px',
            '&:hover': {
                backgroundColor: 'var(--secondary-50) !important',
            },
            '&:active': {
                backgroundColor: 'var(--secondary-40) !important',
            },
        },
        '& path': {
            fill: 'var(--secondary-30) !important',
        },
        "& .MuiTouchRipple-root": {
            display: 'none !important'
        },
        "& .MuiTypography-root": {
            color: 'var(--secondary-30)!important',
        }
    },
    menuOnSelect: {
        height: '48px',
        marginLeft: '8px',
        marginRight: '8px',
        marginBottom: '4px',
        borderRadius: '12px',
        width: 'auto ',
        backgroundColor: 'var(--primary-10) !important',
        '& .MuiListItemIcon-root': {
            minWidth: '32px',
            boxSizing: 'border-box',
        },
        '& .MuiListItemButton-root': {
            padding: '12px 20px 12px 20px',
            height: '48px',

        },
        color: 'var(--white-10) !important',
        '& path': {
            fill: 'var(--white-10) !important',
        },
        "& .MuiTouchRipple-root": {
            display: 'none !important'
        },
        "& .MuiTypography-root": {
            color: 'var(--white-10) !important',
        }
    },
    icon: {
        minWidth: '40px'
    },
    sideNavBar:{
        
    }
}));