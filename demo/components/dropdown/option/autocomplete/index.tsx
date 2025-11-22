import { AutocompleteProps, SelectedValue } from '@/design/components/picker/autocomplete/simple';
// import { useStyles } from "@/design/components/picker/autocomplete";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Autocomplete } from "@mui/material";
import TextField from "@mui/material/TextField";
import { Box } from "@mui/system";
import { useEffect, useState } from "react";
import { useStyles } from './style';

const PickerOptions = ({ value, onChange, options, placeholder, disabled, helpertext, error, helperTextPriority, width, defaultValue, arrowDropDownIcon }: AutocompleteProps) => {
    const [val, setVal] = useState<SelectedValue>(null)
    const styles = useStyles({ value, helperTextPriority, width });

    useEffect(() => {
        options.map(option => {
            if (value === option?.id) {
                setVal(option)
            }
        })
    }, [value, options]);

    function onChangeData(event: any, option: any) {
        setVal(option);
        onChange(option)
    }
    return (
        <div>
            <Autocomplete
                disabled={disabled}
                disablePortal
                key={Math.floor((Math.random() * 100) + 1)}
                options={options}
                value={val}
                popupIcon={arrowDropDownIcon ? arrowDropDownIcon : <ExpandMoreIcon />}
                classes={{
                    paper: styles.classes.paper,
                    option: styles.classes.option
                }}
                defaultValue={defaultValue}
                className={styles.classes.autoComplete}
                onChange={onChangeData}
                ListboxProps={{ className: styles.classes.listBox }}
                getOptionLabel={(option) => option?.label}
                renderOption={(props, option) => (
                    <Box
                        component="li"
                        sx={{
                            backgroundColor: 'var(--white-20)', borderRadius: '8px !important', fontSize: '14px', border: 'none',
                            padding: '0px !important', display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                            "&:hover": {
                                backgroundColor: 'var(--opacity-5) !important',
                            },
                            "&:active": {
                                backgroundColor: "var(--opacity-5) !important",
                            },
                            "&:focused": {
                                backgroundColor: "var(--opacity-10) !important",
                            },
                            '&[aria-selected="true"]': {
                                backgroundColor: 'transparent !important',
                            },
                        }}
                        {...props}
                    >
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '7rem', padding: '0px !important', height: '20px' }}>
                            <div> <p> {option?.label} </p></div>
                            {/* icon */}
                            {/* <div>{arrowDropDownIcon ? arrowDropDownIcon : <ExpandMoreIcon />}</div> */}
                            <div style={{ border: '1px solid gray', padding: '1px 4px', borderRadius: '4px', display: 'flex', alignItems: 'center', justifyContent:'center', height: '20px' }}>
                                {arrowDropDownIcon ? arrowDropDownIcon : <ExpandMoreIcon />}
                                <p>78</p>
                            </div>
                        </div>
                    </Box>
                )}
                renderInput={(params) => (
                    <TextField
                        {...params}
                        className={styles.classes.input}
                        placeholder={placeholder}
                        variant="outlined"
                        value={val}
                        helperText={helpertext}
                        error={error}
                    />
                )}
            />
        </div>
    );
};

export { PickerOptions as AutocompleteOption };
