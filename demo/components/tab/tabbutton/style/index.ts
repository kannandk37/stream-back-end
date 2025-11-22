import { makeStyles } from "tss-react/mui";
import { Theme } from "@emotion/react";
import { TabButtonProp } from '@/design/components/demo/components/tab/tabbutton/props';

export const useStyles = makeStyles<Partial<TabButtonProp>>()((theme: Theme, { size, label, disabled, color }) => ({
  root: {
    root: {
    }
  }
}));