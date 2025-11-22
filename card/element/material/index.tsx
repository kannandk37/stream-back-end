// import styles from '@/design/components/card/style/index.module.css';
import Paper from '@mui/material/Paper';
import { CardProp } from '@/design/components/card/props';
import clsx from 'clsx';
import { useStyles } from '@/design/components/card/style';

export const Card = ({ elevation, children, style, onClick, type }: CardProp) => {
    const styles = useStyles({});
    const root = clsx(styles.classes.frame, {
        [styles.classes.featured]: type === 'featured',
        [styles.classes.predominent]: type === 'predominent',
    });
    return (
        <Paper
            className={root}
            elevation={elevation || 1} style={style} onClick={onClick}>
            {children}
        </Paper>

    )
}