import { makeStyles } from "tss-react/mui";
import { SimpleButtonProp } from "@/design/components/button/simple/props";

export const useStyles = makeStyles<Partial<SimpleButtonProp>>()(
  (theme, { width, color, variant, disabled }) => ({
    root: {
      minWidth: width ? `${width} !important` : "var(--buttonMinWidth) !important",
      padding: "var(--buttonPadding)!important",
      cursor: "var(--cursor)!important",
      borderRadius: "var(--buttonRadius)!important",
      border:
        color == "secondary" && !disabled
          ? "1px solid var(--black-20) !important" :
          color == "secondary" && disabled ? '1px solid var(--grey-30)'
            : "none !important",
      textTransform: "none",
      width: width ? width : "100%",
      fontWeight: "var(--button-font-weight) !important",
      fontFamily: "var(--button-font-family) !important",
      fontSize: 'var(--button-font-size) !important',
      lineHeight: "23px",
      //   button background color styles
      backgroundColor:
        color === "primary" && !disabled
          ? "var(--black-10) !important"
          : color === "primary" && disabled
            ? "var(--grey-40) !important"
            : color === "secondary" && !disabled
              ? "transparent !important"
              : color === "secondary" && disabled
                ? "var(--white-10) !important"
                : color === "teritary"
                  ? "rgb(170, 165, 165)!important"
                  : color === "info"
                    ? "var(--colorbg) !important"
                    : variant == "text"
                      ? "transparent !important"
                      : width == "fullWidth"
                        ? "var(--black-10) !important"
                        : variant == "elevated" && !disabled ? "var(--white-10)" : variant == "elevated" && disabled ? "var(--grey-40)" : "var(--black-10) !important",
      //   button text color styles
      color:
        color === "primary" && !disabled
          ? "var(--white-10) !important"
          : color === "primary" && disabled
            ? "var(--grey-10) !important"
            : color === "secondary" && !disabled
              ? "var(--black-20) !important"
              : color === "secondary" && disabled
                ? "var(--grey-40) !important"
                : color === "teritary"
                  ? "var(--color) !important"
                  : color === "info"
                    ? "var(--white) !important"
                    : variant == "text" && !disabled
                      ? "var(--infoDark) !important" :
                      variant == "text" && disabled ? 'var(--grey-40) !important'
                        : width == "fullWidth"
                          ? "var(--white-10) !important"
                          : variant == 'elevated' && !disabled ? "var(--black-20)" : variant == 'elevated' && disabled ? "var(--grey-10)" : "var(--white-10) !important",

      //   hover styles
      "&:hover": {
        backgroundColor:
          color === "secondary" ? "rgba(42, 42, 42, 0.08) !important" : "var(--white-10)",
        color: variant == 'text' ? 'var(--black-10) !important' : "",
        boxShadow:
          color === "primary" &&
            !disabled ?
            "0px 4px 10px rgba(0, 0, 0, 0.4) !important" : variant === "elevated" ? "0px 2px 10px rgba(0, 0, 0, 0.25)" : "",
        "& svg": {
          fill: variant == 'text' && "var(--black-10)"
        }
      },
      "&:active": {
        backgroundColor:
          color === "primary"
            ? "var(--black-20) !important"
            : color === "secondary"
              ? "rgba(42, 42, 42, 0.18) !important"
              : color === "teritary"
                ? "var(--white) !important"
                : color === "info"
                  ? "var(--colorbg) !important"
                  : variant == "text"
                    ? "transparent"
                    : width == "fullWidth"
                      ? "var(--colorbg) !important"
                      : variant === "elevated" ? 'var(--white-20)' : '',
        color:
          color === "primary"
            ? "var(--white-10) !important"
            : color === "secondary"
              ? "var(--black-20) !important"
              : color === "teritary"
                ? "var(--color) !important"
                : color === "info"
                  ? "var(--white) !important"
                  : variant == "text"
                    ? "var(--black-20) !important"
                    : width == "fullWidth"
                      ? "var(--white) !important"
                      : "",
        boxShadow:
          color === "primary" && !disabled
            ? "0px 1px 10px rgba(0, 0, 0, 0.25)"
            : variant === 'elevated' ? '0px 2px 10px rgba(0, 0, 0, 0.1)' : '',
        "& svg": {
          fill: variant == 'text' && "var(--black-20)"
        }
      },
      "& svg": {
        fill:
          color == "primary" && !disabled
            ? "var(--white-10)"
            : color == "primary" && disabled
              ? "var(--grey-10)"
              : color == "secondary" && !disabled
                ? "var(--black-20)"
                : color == "secondary" && disabled
                  ? "var(--grey-30)"
                  : variant == "text" && !disabled ? 'var(--infoDark)' :
                    variant == "text" && disabled ? "var(--grey-40)" : variant == "elevated" && disabled ? "var(--grey-10)" : variant == "elevated" && !disabled ? "var(--black-20) !important" : "",
      },
      boxShadow:
        color === "primary" && !disabled
          ? "0px 1px 10px rgba(0, 0, 0, 0.25)"
          : variant === 'elevated' && !disabled ? "0px 2px 10px rgba(0, 0, 0, 0.25)" : '',
    },
  })
);
