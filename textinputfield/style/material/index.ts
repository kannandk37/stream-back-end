import { Theme } from "@mui/material";
import { makeStyles } from "tss-react/mui";
import { TextInputFieldProps } from "@/design/components/textinputfield/props";

export const useStyles = makeStyles<Partial<TextInputFieldProps>>()((theme: Theme, { value, helperTextPriority, width, toUppercase }) => ({
  root: {
    width: width == "extraSmall" ? "51px" : width == "small" ? "70px" : width == "fullWidth" ? "100% !important" : width == "medium" ? "188px" : width ? width : "245px",
    "& input[type=number]::-webkit-outer-spin-button": {
      WebkitAppearance: "none",
      margin: 0,
    },
    "& input[type=number]::-webkit-inner-spin-button": {
      WebkitAppearance: "none",
      margin: 0,
    },
    "& .MuiOutlinedInput-input": {
      padding: "0px",
      fontFamily: "rootFontFamilyMedium",
      marginLeft: "-2px",
      marginRight: "-4px",
      marginTop: '1.5px !important'
    },
    //  icon style  input  
    "& .MuiButtonBase-root": {
      padding: '8px 10px 8px 10px !important',
      "& path": {
        fill: value && "var(--black-30) !important"
      },
    },
    //  icon style when input is hover 
    "&:hover": {
      "& .MuiButtonBase-root": {
        "& path": {
          fill: "var(--black-30) !important",
        },
      },
    },
    //  icon style when input is focused
    "& .Mui-focused": {
      "& .MuiButtonBase-root": {
        "& path": {
          fill: "var(--black-30) !important",
        },
      },
    },
    // error icon styles
    "& .Mui-error": {
      "& .MuiButtonBase-root": {
        ".css-yxaydd-endIcon": {
          "& path": {
            fill: "var(--brand_primary) !important",
          },
        },
        "& path": {
          fill: "var(--black-30) !important",
        },
      },
      "& .MuiButtonBase-root:nth-of-type(2)": {
        "& path": {
          fill: "var(--input-field-error-dark) !important",
        },
      },
    },

    "& .Mui-disabled": {
      "&:hover": {
        "& .MuiButtonBase-root": {
          "& path": {
            fill: "var(--grey-40) !important",
          },
        },
      },
    },
    // inner input styles
    "& .MuiInputBase-input": {
      height: "25px !important",
      width: '102%',
      textTransform: toUppercase  ?  'uppercase': 'none',
    },
    // input root styles
    "& .MuiOutlinedInput-root": {
      borderRadius: "8px",
      height: width === '80px' ? '50px' : "40px !important",
      color: "var(--input-field-color)",
      fontWeight: 400,
      // fontSize: "16px",
      fontSize: "var(--input-field-font-size)",

      backgroundColor: "var(--white-10)",
      "&:hover fieldset": {
        border: "1px solid var(--input-field-hover-border) !important",
      },
      "&.Mui-focused fieldset": {
        border: "1.5px solid var(--input-field-focus-border) !important",
      },
      "& :-webkit-autofill": {
        WebkitTextFillColor: "var(--input-field-text-fill)",
        WebkitBoxShadow: "0 0 0px 1000px #FCFCFC inset",
        borderRadius: '0px !important'
      },
      "& > fieldset": { border: value && "1px solid var(--grey-10) !important" },
    },
    "& .MuiOutlinedInput-root.Mui-disabled": {
      "& > fieldset": { border: "1px solid var(--grey-50) !important" },
    },
    "& .MuiOutlinedInput-root.Mui-error": {
      "& > fieldset": { border: "1px solid  var(--input-field-error-dark) !important" },
    },
    // helper text styles
    '& .MuiFormHelperText-root': {
      marginLeft: "10px",
      marginTop: "2px",
      fontFamily: 'rootFontFamilyMedium',
      fontWeight: 500,
      fontSize: '12px',
      lineHeight: '17px',
      color: helperTextPriority == 'low' ? 'var(--grey-10)' : 'var(--infoDark)',
      position: 'absolute',
      bottom: '-1.35rem',
      width: '95%'
    },
    // helper text error styles
    "& .MuiFormHelperText-root.Mui-error": {
      color: " var(--input-field-error-dark)",
      marginLeft: "10px",
      marginTop: "2px",
      fontFamily: "rootFontFamilyMedium",
      fontStyle: "normal",
      fontWeight: 500,
      fontSize: "12px",
      lineHeight: "17px",
    },
    //  disabled input styles
    "& .MuiInputBase-root.MuiOutlinedInput-root.Mui-disabled": {
      "& .MuiInputBase-input": {
        padding: "0px important",
        fontSize: "14px",
        lineHeight: "20px",
        fontFamily: "rootFontFamilyMedium !important",
        fontStyle: "normal",
        // one
        // color: "#D9D9D9 !important",
        color: 'var(--input-field-color)'
      },
    },
  },
  endIcon: {
    marginRight: -12,
    marginLeft: 4,
    '&:active': {
      '& svg': {
        background: 'var(----input-black-10, rgba(42, 42, 42, 0.08))',
        borderRadius: '8px'
      },
    }
  },
  startIcon: {
    marginLeft: -14,
    marginRight: -6,
  },
  multiline: {
    fontWeight: "500",
    width: "245px",
    // input root styles
    "& .MuiOutlinedInput-root": {
      height: "82px !important",
      borderRadius: "8px",
      padding: "0px",
      backgroundColor: 'var(--white-10)',
      "& > fieldset":
      {
        border: '1px solid var(--grey-30)',
      },
      "&.Mui-focused fieldset": {
        border: '1.5px solid var(--input-black-10)',
      },
    },
    // inside inputt styles
    "& .MuiInputBase-input": {
      padding: '0px important',
      marginLeft: "12px",
      marginRight: '12px',
      height: "58px !important",
      fontSize: "14px",
      lineHeight: "20px",
      fontStyle: 'normal',
      fontFamily: "rootFontFamilyMedium",
      color: "var(--black-20)",
    },
    '&:hover fieldset': {
      border: '1px solid var(--input-black-10)',
    },
    "& .MuiOutlinedInput-root.Mui-disabled": {
      "& > fieldset": {
        color: 'red !important',
        border: '1px solid var(--grey-50)'
      }
    },
    "& .MuiOutlinedInput-root.Mui-error": {
      "& > fieldset": { border: "1px solid  var(--input-field-error-dark)" },
    },
    // helper text styles
    '& .MuiFormHelperText-root': {
      marginLeft: "10px",
      marginTop: "2px",
      fontFamily: 'rootFontFamilyMedium',
      fontWeight: 500,
      fontSize: '12px',
      lineHeight: '17px',
    },
    // helper text error styles
    '& .MuiFormHelperText-root.Mui-error': {
      color: ' var(--input-field-error-dark)',
      marginLeft: "10px",
      marginTop: "2px",
    },
    // disabled styles
    "& .MuiInputBase-root.MuiOutlinedInput-root.Mui-disabled": {
      "& .MuiInputBase-input": {
        padding: '0px important',
        fontSize: "14px",
        lineHeight: "20px",
        fontFamily: "Open Sans !important",
        fontStyle: 'normal',
        color: '#D9D9D9 !important',
      }
    },
  }
}));
