import { TooltipComponent } from '@/design/components/tooltip';
import { makeStyles } from "tss-react/mui";

function TooltipMessage() {
    const styles = useStyles()
    const list = ['Must have UPPER CASE and lowercase', 'Must have a special character', 'Must have a special character','Must have numbers','Minimum of 8 characters', 'Maximum of 16 characters']
    return (
        <>
           <TooltipComponent>
              <ul className={styles.classes.list}>
                    {
                        list.map((listItem) => {
                            return (
                                <li className={styles.classes.listitem}>
                                    {listItem}
                                </li>
                            )
                        })
                    }
                </ul>
           </TooltipComponent>
        </>
    )
}

export default TooltipMessage

export const useStyles = makeStyles()(() => ({
    list: {
        paddingLeft: "20px",
        margin: '0px',
        paddingInlineStart: 'inherit',
    },
    listitem: {
        listStyleType: "none",
        display: "flex",
        "::before":{
            content: '"."',
            verticalAlign: 'middle',
            lineHeight: "9px",
            marginLeft: "-8px",
            marginRight: "10px",
        }
      }
}));
