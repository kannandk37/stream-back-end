import { Checkbox } from '@mui/material';
import { TickboxProps } from '@/design/components/checkbox/props';
import { useStyles } from "@/design/components/checkbox/style";
import { clsx } from 'clsx';


const Tickbox = ({ checked, onClick, disableRipple, disabled, checkedIconColor }: TickboxProps) => {
  const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
  const styles = useStyles({ checked, checkedIconColor });

  return (
    <>
      <Checkbox
        style={{ backgroundColor: "transparent" }}
        className={styles.classes.root}
        {...label}
        checked={checked}
        disableRipple={disableRipple}
        onClick={onClick}
        checkedIcon={<span className={clsx(styles.classes.icon, styles.classes.checkedIcon)} />}
        icon={<span className={styles.classes.icon} />}
        disabled={disabled}
      />
    </>
  )
}
export { Tickbox as Checkbox }