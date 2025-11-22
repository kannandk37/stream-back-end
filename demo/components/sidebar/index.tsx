import { Accordion, AccordionDetails, AccordionSummary } from '@mui/material';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Toolbar from '@mui/material/Toolbar';
import { Routes, useLocation, useNavigate } from 'react-router-dom';

import Logo from '@//logo.svg?react';
import { menuItems } from '@/app/menu/items';
import { Profile } from '@/design/components/profile';
import { Text } from '@/design/components/text';
import { DesignIconsDownArrowOutlineIcon } from '@/design/icons/down-arrow/outline';
import { DesignIconsLogoutOutlineIcon } from '@/design/icons/logout/outline';
import { useState } from 'react';
import { useStyles } from './style';

export function Layout({ children }) {
    const navigate = useNavigate();
    const styles = useStyles();
    const location = useLocation();
    const [open, setOpen] = useState(false);

    const logout = () => {
        localStorage.clear();
        navigate('/signin')
    }

    return (
        <div className={styles.classes.container} >
            {true &&
                <Drawer
                    variant="permanent"
                    sx={{
                        width: 240,
                        flexShrink: 0,
                        [`& .MuiDrawer-paper`]: { width: 240, boxSizing: 'border-box', backgroundColor: 'var(--grey-40)', margin: '12px', borderRadius: '20px', height: "97.75% !important", border: 'none !important' },
                    }}
                >
                    {/* <Toolbar /> */}
                    <Box>
                        <div style={{ padding: '24px 20px 8px 20px',  display: "flex" }}>
                            <Logo />
                        </div>
                        <List style={{ marginTop: '16px' }}>
                            {menuItems.filter(item => item.items === undefined).map((item, index) => (
                                <ListItem key={index} disablePadding className={item.path == "/" ? styles.classes.menuOnSelect : styles.classes.menu}>
                                    <ListItemButton onClick={() => {
                                        setOpen(false);
                                        navigate(item.path);
                                    }}>
                                        <ListItemIcon className={styles.classes.icon}>
                                            {item.icon}
                                        </ListItemIcon>
                                        <ListItemText  >
                                            <Text variant='body2'>{item.title}</Text>
                                        </ListItemText>
                                    </ListItemButton>
                                </ListItem>
                            ))}
                            {menuItems.filter(item => item.items !== undefined).map((item, index) => (
                                <Accordion key={index} sx={{
                                    boxShadow: 'none !important',
                                    background: 'none !important',
                                    margin: '0px !important',
                                }}>
                                    <AccordionSummary
                                        sx={{
                                            "& .MuiTypography-root": {
                                                color: 'var(--secondary-30) !important',
                                            },
                                            '& path': {
                                                fill: 'var(--secondary-30) !important',
                                            },
                                            "&.Mui-focusVisible": {
                                                height: '48px !important',
                                                outline: '1px solid var(--primary-10)',
                                                minHeight: '48px !important',
                                                marginLeft: '8px !important',
                                                width: '93% !important',
                                                borderRadius: '12px',
                                                backgroundColor: 'var(--grey-40)'
                                            },
                                            "&.Mui-expanded": {
                                                height: '48px !important',
                                                outline: '1px solid var(--primary-10)',
                                                minHeight: '48px !important',
                                                marginLeft: '9px !important',
                                                width: '93% !important',
                                                borderRadius: '12px',
                                                backgroundColor: 'var(--grey-40)',
                                                 marginTop: "4px !important",
                                                 marginBottom: "4px !important",
                                                "& .MuiTypography-root": {
                                                    color: 'var(--secondary-30) !important',
                                                },
                                            },
                                            '&[aria-expanded="false"]': {
                                                outline: 'none !important',
                                                width: '93% !important',
                                                marginLeft: '9px !important',
                                            },
                                        }}
                                        expandIcon={<DesignIconsDownArrowOutlineIcon color='var(--secondary-30)' />}
                                    >
                                        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginLeft: '4px' }}>
                                            <ListItemIcon className={styles.classes.icon}>
                                                {item.icon}
                                            </ListItemIcon>
                                            <Text variant='body2' style={{marginLeft: "-9px"}}>{item.title}</Text>
                                        </div>
                                    </AccordionSummary>

                                    <AccordionDetails
                                        sx={{ padding: '0px !important', }}>
                                        {item.items.map(accordionItem => (
                                            <ListItem key={index} disablePadding className={item.path == "/" ? styles.classes.menuOnSelect : styles.classes.menu}>
                                                <ListItemButton onClick={() => {
                                                    setOpen(false);
                                                    navigate(accordionItem.path);
                                                }}>
                                                    <ListItemIcon className={styles.classes.icon}
                                                    style={{marginLeft: '10px'}}>
                                                        {accordionItem.icon}
                                                    </ListItemIcon>
                                                    <ListItemText  >
                                                        <Text variant='body2'>{accordionItem.title}</Text>
                                                    </ListItemText>
                                                </ListItemButton>
                                            </ListItem>
                                        ))}
                                    </AccordionDetails>
                                </Accordion>
                            ))}
                        </List>
                        <div style={{ display: 'flex', justifyContent: 'center', position: 'fixed', bottom: 18, left: 20 }}>
                            <Profile mode="light" name="Kannan Rajaguru" designation="Team Lead" isSignout signoutIcon={<DesignIconsLogoutOutlineIcon color="var(--infoDark)" />} />
                        </div>
                    </Box>
                </Drawer>
            }
            <Box component="main" sx={{ flexGrow: 1 }}>
                <Toolbar />
                <Routes>
                    {
                        children
                    }
                </Routes>
            </Box>
        </div>
    );
}
