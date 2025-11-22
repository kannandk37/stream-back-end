import { makeStyles } from "tss-react/mui";
import { Theme } from "@emotion/react";
import { TickboxProps } from "@/design/components/checkbox/props";

export const useStyles = makeStyles<Partial<TickboxProps>>()((theme: Theme) => ({
  root:{
    '& .MuiTouchRipple-root':{
      display: 'none !important'
    }
  },
  icon: {
    borderRadius: 4,
    border: '2px solid var(--grey-10)',
    width: 20,
    height: 20,
    backgroundColor: 'var(--white-10)',
    'input:hover ~ &': {
      backgroundColor: 'var(--grey-50)',
      border: '2px solid var(--black-30)',
    },
    'input:active ~ &': {
      backgroundColor: 'var(--grey-40)',
      border: '2px solid var(--black-30)',
    },
  },
  checkedIcon: {
    backgroundColor: 'var(--white-10)',
    border: '2px solid var(--grey-10)',
    display: 'flex',
    justifyContent: "center",
    alignItems: 'center',
    '&:before': {
      color: "red",
      display: 'block',
      width: 15,
      height: 15,
      position: 'relative',
      top: 4,
      left: 3.8,
      backgroundPosition: 'center',
      backgroundImage:
        "url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Cpath" +
        " fill-rule='evenodd' clip-rule='evenodd' d='M7.20711 0.626206C7.59763 1.01673 7.59763 1.6499 7.20711 2.04042L3.87377 5.37375C3.48325 5.76428 2.85008 5.76428 2.45956 5.37375L0.792893 3.70709C0.402369 3.31656 0.402369 2.6834 0.792893 2.29287C1.18342 1.90235 1.81658 1.90235 2.20711 2.29287L3.16667 3.25243L5.79289 0.626206C6.18342 0.235682 6.81658 0.235682 7.20711 0.626206Z" +
        "1.003 0 00-1.42 1.42l3 3c.18.18.43.29.71.29s.53-.11.71-.29l5-5A1.003 1.003 0 0012 5z' fill='rgba(102,102,102)'/%3E%3C/svg%3E\")",
      content: '""',
      backgroundRepeat: 'no-repeat',
    },

  },
}));