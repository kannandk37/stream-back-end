import View from '@/assets/svg/view.svg?react';
import { ContextMenu } from "@/design/components/contextmenu";
import React from 'react';
import { DesignIconsEditOutlineIcon } from '@/design/icons/edit/outline';
import { DesignIconsDeleteOutlineIcon } from '@/design/icons/delete/outline';
import { DesignIconsDownloadOutlineIcon } from '@/design/icons/download/outline';

export const ActionCard = () => {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const [anchorEl2, setAnchorEl2] = React.useState<null | HTMLElement>(null);

    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClick2 = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl2(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
        setAnchorEl2(null)
    };
    const open = Boolean(anchorEl);
    const open2 = Boolean(anchorEl2);
    return (
        <>
            <ContextMenu menuItems={[
                {
                    label: 'View',
                    icon: <View />

                },
                {
                    label: 'Edit',
                    icon: <DesignIconsEditOutlineIcon />
                },
                {
                    label: 'Delete',
                    icon: <DesignIconsDeleteOutlineIcon />
                }
            ]} openMenu={open2} handleClick={handleClick2} handleClose={handleClose} anchorEl={anchorEl2} />

            <ContextMenu menuItems={[
                {
                    label: 'View',
                    icon: <View />

                },
                {
                    label: 'Edit',
                    icon: <DesignIconsEditOutlineIcon />
                },
                {
                    label: 'Download details',
                    icon: <DesignIconsDownloadOutlineIcon />,
                    onClick: () => {
                        console.log('ok')
                    }
                },
                {
                    label: 'Delete',
                    icon: <DesignIconsDeleteOutlineIcon />
                }
            ]} openMenu={open} handleClick={handleClick} handleClose={handleClose} anchorEl={anchorEl} />
        </>
    );
}

