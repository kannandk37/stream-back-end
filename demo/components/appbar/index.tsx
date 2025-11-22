import { AppBarProps } from '@/design/components/appbar';
import { StyledAppBar, useStyles } from '@/design/components/appbar';
import { IconButton } from '@/design/components/button/icon';
import { SearchBar } from '@/design/components/search';
import { TextField } from '@mui/material';
import Toolbar from '@mui/material/Toolbar';
import React from 'react';
import { Avatar } from '@/design/components/avatar';
import { Badge } from '@/design/components/badge';
import { LinearProgressBar } from '@/design/components/progress/bar';
import { Text } from '@/design/components/text';
import { DesignIconsNotificationsOutlineIcon } from '@/design/icons/notifications/outline';
import { DesignIconsSearchOutlineIcon } from '@/design/icons/search/outline';
import { DesignIconsMenuOutlineIcon } from '@/design/icons/menu/outline';
import { DesignIconsCloseOutlineIcon } from '@/design/icons/close/outline';

const AppBarComponent = ({ openMenu, search: theSearch, badge, username, designation, handleSearch, logo, toggleDrawer }: AppBarProps) => {
    const styles = useStyles();
    const [searchable, setSearchable] = React.useState<boolean>(false);
    const [search, setSearch] = React.useState<string>();
    // const { drawerOpen, setDrawerOpen } = React.useContext(AppContext);
    // const { progressOpen, setProgressOpen } = React.useContext(AppContext);

    // React.useEffect(() => {
    //     if (!progressOpen) {
    //         setProgressOpen(progressOpen)
    //     }
    // }, [progressOpen])


    const onChange = (event: any) => {
        setSearch(event.target.value);
        handleSearch(event.target.value)
    }

    // const handleDrawer = () => {
    //     setDrawerOpen(!drawerOpen);
    // };

    return (
        <StyledAppBar
            position="fixed"
            open={openMenu}
            className={styles.classes.appBar}
        >
            {/* {
                progressOpen &&
                <LinearProgressBar color='primary' />
            } */}
            <Toolbar className={styles.classes.toolbar}>
                {!searchable &&
                    <div className={styles.classes.content}>
                        <div className={styles.classes.appBarLeftContent}>
                            <div style={{ display: 'flex' }}>
                                {logo}
                                <IconButton
                                    // onClick={handleDrawer}
                                    >
                                    <DesignIconsMenuOutlineIcon
                                    // TODO
                                    //  className={styles.classes.menu} 
                                    />
                                </IconButton>
                            </div>
                        </div>
                        <div className={styles.classes.appBarRightContent}>
                            <div style={{ display: 'flex' }}>
                                <div className={styles.classes.search}>
                                    <SearchBar
                                        mode="dark"
                                    />
                                </div>
                                {/* <IconButton onClick={() => setSearchable(true)}>
                                    <Search className={styles.classes.searchable} />
                                </IconButton> */}
                                <div className={styles.classes.notification}>
                                    <Badge count={12} overlap='circular'>
                                        <IconButton size='large'>
                                            <DesignIconsNotificationsOutlineIcon />
                                        </IconButton>
                                    </Badge>
                                </div>

                                <Text variant='title3' style={{ display: 'flex', alignItems: "center", marginRight: '8px' }} color={'var(--white-10)'}>{username} {designation && <>{`| ${designation}`}</>}</Text>
                                <Avatar
                                    name={username}
                                />
                            </div>
                        </div>
                    </div>
                }
                {searchable &&
                    <div className={styles.classes.mobileSearchableView}>
                        <div>
                            <IconButton >
                                <DesignIconsSearchOutlineIcon
                                //TODO  
                                // className={styles.classes.mobileSearch} onClick={() => setSearchable(false)} 
                                />
                            </IconButton>
                        </div>
                        <div className={styles.classes.input}>
                            <TextField
                                className={styles.classes.inputField}
                                fullWidth
                                value={search}
                                onChange={onChange}
                            />
                        </div>
                        <div >
                            <IconButton >
                                <DesignIconsCloseOutlineIcon 
                                // TODO 
                                // className={styles.classes.clear} onClick={() => setSearch('')}
                                 />
                            </IconButton>
                        </div>
                    </div>
                }
            </Toolbar>
        </StyledAppBar>
    )
}

export { AppBarComponent as AppBar };
