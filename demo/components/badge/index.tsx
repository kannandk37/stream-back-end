import { makeStyles } from "tss-react/mui";

import { Badge } from "@/design/components/badge";

export interface BadgeProps {
    badgeCount?: number;
    variant?: 'dot';
}

export const BadgeComponet = ({ }: BadgeProps) => {
    const styles = useStyles()
    return (
        <>
            <div style={{ height: 200, marginLeft: 50 }}>
            {/* <h2>Normal</h2> */}

            
            <Badge count={52} variant="dot"/>
                <br/>
                {/* <h2>with 1 number</h2> */}
                <Badge count={5} />
                <br/>
                <br/>
                {/* <h2>With 2 numbers</h2> */}
                <Badge count={52} />
                <br/>

                <br/>
                {/* <h2>Limit</h2> */}
                <Badge count={999} isNotification={false}  />
                <br/>
                <br/>
                {/* <h2>Limit</h2> */}
                <Badge count={999} isNotification   />
                <br/>
                <br/>
                <Badge variant="standard" />
            </div>
        </>
    )
}

export const useStyles = makeStyles()(() => ({
    dotBadge: {
        backgroundColor: "var(--brand_primary)",
        minWidth: '6px !important',
        height: '6px !important',
        borderRadius: '10px',
    },
    margin: {
        margin: 15
    },
    badge: {
        fontSize: '12px',
        width: '20px !important',
        height: '20px !important',
        backgroundColor: "var(--brand_primary)",
        fontFamily: 'ZenMaruGothicMedium',
        fontStyle: 'normal',
        fontWeight: 500,
        color: 'var(--white-10)',
        position: "absolute",
        top: '6px',
        right: '5px'
    },
    badgeLargeCount: {
        fontSize: '12px',
        width: '32px !important',
        height: '20px !important',
        backgroundColor: "var(--brand_primary)",
        fontFamily: 'ZenMaruGothicMedium',
        fontStyle: 'normal',
        fontWeight: 500,
        color: 'var(--white-10)',
        position: "absolute",
        top: '5px',
    }
}));