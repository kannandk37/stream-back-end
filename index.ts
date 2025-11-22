import { makeStyles } from "tss-react/mui";
import { Theme } from "@emotion/react";
import { IconButtonProp } from "@/design/components/button/icon/props";

export const useStyles = makeStyles<Partial<IconButtonProp>>()((theme: Theme, { disabled, variant, size, mode }) => ({
  root: {
    width: size ? 40 : 30,
    height: size ? 40 : 30,
    padding: 5,
    backgroundColor:
      variant == "filled" && !disabled
        ? "var(--black-10)"
        : variant == "filled" && disabled && "var(--grey-50) !important",
    border:
      variant == "outline" && !disabled && !mode
        ? "1px solid var(--grey-20) !important"
        : variant == "outline" && disabled && !mode
        ? "1px solid var(--grey-40) !important"
        : variant == "outline" && !disabled && mode
        ? "1px solid var(--black-30) !important"
        : variant == "outline" &&
          disabled &&
          mode &&
          "1px solid var(--black-20) !important",
    "& svg": {
      fill:
        variant == "filled" && !disabled
          ? "var(--white-10) !important"
          : variant == "filled" && disabled
          ? "var(--grey-30) !important"
          : disabled && !mode
          ? "var(--grey-40) !important"
          : mode && !disabled
          ? "var(--white-10) !important"
          : "var(--black-20)",
      "&:hover": {
        fill:
          variant == "outline" && !mode
            ? "var(--black-20) !important"
            : mode && !variant
            ? "var(--brand_primary) !important"
            : "var(--black-10)",
      },
      "&:active": {
        fill: mode ? "var(--white-10) !important" : "var(--black-20)",
      },
      width: size && 20,
      height: size && 20,
    },
    "&:hover": {
      backgroundColor:
        variant == "outline" && !mode
          ? "rgba(42, 42, 42, 0.08) !important"
          : variant == "outline" &&
            mode &&
            "rgba(252, 252, 252, 0.08) !important",
      boxShadow: variant == "filled" && "0px 4px 10px rgba(0, 0, 0, 0.4)",
    },
    "&:active": {
      backgroundColor:
        variant == "filled"
          ? "var(--black-20) !important"
          : variant == "outline" && !mode
          ? "rgba(42, 42, 42, 0.18) !important"
          : mode
          ? "rgba(252, 252, 252, 0.18) !important"
          : "rgba(42, 42, 42, 0.08) !important",
      boxShadow: variant == "filled" && "0px 4px 10px rgba(0, 0, 0, 0.25)",
    },
  },
}));
