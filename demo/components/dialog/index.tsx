import React, { useEffect, useState } from 'react'
import { SimpleButton } from '@/design/components/button/simple'
import { Dialog } from '@/design/components/dialog'
import { Text } from '@/design/components/text'
import { LinearProgressBar } from '@/design/components/progress/bar';
import { DesignIconsWarningOutlineIcon } from '@/design/icons/warning/outline';
import { DesignIconsDummyOutlineIcon } from '@/design/icons/dummy/outline';

function DialogComponent() {
    const [dialogOpen, setDialogOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    const [progressShow, setProgressShow] = useState(false)
    useEffect(() => {
        window.addEventListener("resize", handleResize)
    })
    const handleResize = () => {
        if (window.innerWidth < 900) {
            setIsMobile(true)
        } else {
            setIsMobile(false)
        }
    }
    const onClickProgress = () => {
        setProgressShow(true)
    }
    return (
        <div>
            <SimpleButton color="info" onClick={() => setDialogOpen(true)} >
                Click Me
            </SimpleButton>
            <Dialog open={dialogOpen} close={() => setDialogOpen(false)} 
                title='Title' description='Description' icon={<DesignIconsDummyOutlineIcon/>} okayButtonText='Button' cancelButtonText='Button'/>
        </div>
    )
}

export default DialogComponent