import { makeStyles } from "tss-react/mui";
import { Theme } from "@mui/material";
import { AutocompleteProps } from "@/design/components/picker/autocomplete/simple";

export const useStyles = makeStyles<Partial<AutocompleteProps>>()((theme: Theme, { value, helperTextPriority, width }) => ({
    //  box styles
    autoComplete: {
        width: width ? width : '245px',
        maxWidth: width ? width : "245px",
        "& .MuiOutlinedInput-root": {
            minHeight: "40px !important",
            padding: "0 !important",
            border: "none !important",
            borderRadius: "8px !important",
            paddingBottom: "4px !important",
        },
        "& .MuiInputBase-root": {
            backgroundColor: 'var(--white-20) !important',
            paddingBottom: '0px !important',
            "&:hover fieldset": {
                border: "none !important",
                borderBottom: '2px solid var(--grey-20) !important',
                borderRadius: 'var(--buttonRadius) !important',
            },
            "& > fieldset": {
                border: "0px solid var(--grey-10) !important"
            },
            "&.Mui-focused fieldset": {
                border: "none !important",
                borderBottom: '2px solid var(--secondary-30) !important',
                borderRadius: 'var(--buttonRadius) !important',
            },
            "&.Mui-disabled fieldset": {
                border: "1px solid var(--grey-50) !important",
            },
            "&.Mui-error fieldset": {
                border: "none !important",
                borderBottom: "2px solid var(--error-dark) !important"
            },
        },
        // input text styles
        "& .MuiOutlinedInput-root .MuiAutocomplete-input": {
            padding: "4px 4px 4px 12px !important",
            fontFamily: "rootFontFamilyMedium",
            color: "var(--black-10)",
            fontSize: "14px",
            fontWeight: '500',
            fontStyle: "normal",
            border: "none !important",
            "&:hover": {
                border: "none !important",
            },
        },
        //  chip styles for multiselect
        "& .MuiButtonBase-root.MuiChip-root": {
            height: "36px !important",
            borderRadius: "8px !important",
            padding: "5px !important",
            backgroundColor: "var(--grey-40)",
            margin: "5px 10px !important",
            border: '0.5px solid var(--grey-40)',
            "& svg": {
                marginLeft: "8px !important",
                "& path": {
                    fill: "var(--black-20)",
                },
            },
            "& .MuiChip-label": {
                fontFamily: "rootFontFamilyRegular",
                color: "var(--black-10)",
                fontSize: "14px",
                fontWeight: '500',
                padding: '0px 7px',
            },
            "& .MuiChip-deleteIcon": {
                fontSize: '18px'
            }
        },
        // dropdown icon styles
        "& .MuiAutocomplete-popupIndicator": {
            marginTop: "3px",
            marginRight: "0.2px",
            "&:hover": {
                backgroundColor: "var(--white-10)",
                "& svg": {
                    "& path": {
                        fill: "var(--black-10)",
                    },
                },
            },
            "&:active": {
                backgroundColor: "var(--grey-40)",
            },
        },
    },
    // input styles
    input: {
        // helper text error styles
        "& .MuiFormHelperText-root.Mui-error": {
            color: " var(--errorDark)",
            marginLeft: "10px",
            marginTop: "2px",
            fontFamily: "rootFontFamilyMedium",
            fontStyle: "normal",
            fontWeight: 500,
            fontSize: "12px",
            lineHeight: "17px",
        },
        // helper text with priority styles
        '& .MuiFormHelperText-root': {
            marginLeft: "10px",
            marginTop: "2px",
            fontFamily: 'rootFontFamilyMedium',
            fontWeight: 500,
            fontSize: '12px',
            lineHeight: '17px',
            color: helperTextPriority == 'low' ? 'var(--grey-10)' : 'var(--infoDark)',
        },
    },
    // dropdown box styles
    paper: {
        boxShadow: "0px 2px 10px rgba(0, 0, 0, 0.1)",
        borderRadius: "8px !important",
        "& .MuiPaper-elevation1": {
            boxShadow: "none !important",
        },
    },
    // box items styles and scrollbar styles
    listBox: {
        color: "var(--black-20)",
        maxHeight: "192px",
        border: "none",
        backgroundColor: "var(--white-10)",
        borderRadius: "8px",
        fontFamily: "rootFontFamilyMedium !important",
        boxShadow: "none !important",
        margin: '6px 2px 6px 0px',

        "& .MuiPaper-elevation1": {
            boxShadow: "none !important",
        },
        '&::-webkit-scrollbar': {
            width: '4px',
            backgroundColor: 'var(--grey-50)',
            borderRadius: '2px',
        },
        '&::-webkit-scrollbar-track': {
            boxShadow: 'none',
        },
        '&::-webkit-scrollbar-thumb': {
            borderRadius: '2px',
            backgroundColor: 'var(--grey-10)',
            height: '40px'
            // border: '20px solid var(--grey-10)'
        },
        '&::-webkit-scrollbar-track-piece': {
            width: '2px !important',

        }
    },
    // option list styles
    option: {
        // "& > img": { mr: 2, flexShrink: 0 },
        display:'flex',
        justifyContent:'space-between',
        backgroundColor: "var(--white-10)",
        borderRadius: "8px !important",
        fontSize: "14px",
        border: "none",
        height: "auto !important",
        margin: '6px 6px',
        paddingLeft: "20px !important",
        paddingRight: "20px !important",
        paddingTop: "8px !important",
        paddingBottom: "8px !important",
        "&:hover": {
            backgroundColor: 'var(--opacity-5) !important',
        },
        "&:active": {
            backgroundColor: "var(--opacity-5) !important",
        },
        "&:focused": {
            backgroundColor: "var(--opacity-10) !important",
        },
        '&[aria-selected="true"]': {
            backgroundColor: "var(--grey-40) !important",
        },
    }
}));
