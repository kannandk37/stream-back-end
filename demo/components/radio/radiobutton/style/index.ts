import { makeStyles } from "tss-react/mui";
import { Theme } from "@emotion/react";
import { RadioButtonProp } from '@/design/components/demo/components/radio/radiobutton/props';

export const useStyles = makeStyles<Partial<RadioButtonProp>>()((theme: Theme, { size, label, disabled, color }) => ({
  root: {
    root: {

      color: color == 'primary' ? 'var(--secondary-30) !important' : 'var(--color-grey-30)',
      "& .MuiSvgIcon-root": {
        width: '20px !important',
        height: '20px !important',
        padding: '3px !important'
      },
      "&.MuiButtonBase-root": {
        padding: '3px !important',
      },
      '&:hover': {
        backgroundColor: 'var(--secondary-60)  !important',
        color: 'var(--secondary-30) !important',
        padding: '3px !important'
      },
      '&:active': {
        backgroundColor: 'var(--secondary-50)  !important',
        color: 'var(--secondary-30) !important',
        padding: '3px !important'
      }
    }
  }
}));