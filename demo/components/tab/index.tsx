import { Tab } from "@/design/components/demo/components/tab/tabbutton"
import { DesignIconsDummyOutlineIcon } from "@/design/icons/dummy/outline"

export const TabButtonComponent = () => {
    return (
        <div style={{ padding: '20px'}}>
            <div style={{ gap: '20px', display: 'flex' }}>
                <Tab label="Toggle button" color="secondary" disableRipple={true} />
                <Tab label="Toggle button" color="primary" disableRipple={true} />
                <Tab label="Toggle button" color="primary" disabled disableRipple={true} />
            </div><br /><br />
            <div style={{ gap: '20px', display: 'flex' }}>
                <Tab label="Toggle button" color="secondary" disableRipple={true} />
                <Tab label="Toggle button" color="primary" disableRipple={true} icon={<DesignIconsDummyOutlineIcon color="var(--grey-10)" />} iconPosition="start"/>
                <Tab label="Toggle button" color="primary" disabled disableRipple={true} />
            </div>
        </div>
    )
}