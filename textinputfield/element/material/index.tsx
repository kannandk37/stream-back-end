import TextField from '@mui/material/TextField';
import { IconButton, InputAdornment, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { TextInputFieldProps } from '@/design/components/textinputfield/props'
import { useStyles } from '@/design/components/textinputfield/style';
import { Visibility, VisibilityOff } from '@mui/icons-material';

export const TextInputField = ({ disableUnderline, variant, label, size, value, name, error, helperText, type, onChange, disabled, placeholder, min, onFocus, onBlur, width, maxLength, inputProps = null, trim = false, InputLabelProps, visibleThePassword, multiline, rows, visibleTheEndIcon, visibleTheStartIcon, helperTextPriority, startIcon, passwordVisibleOff, passwordVisibleOn, endIcon, onPressEnter = null, startText, style, success, toUppercase, showLabel }: TextInputFieldProps) => {
    const { classes, cx } = useStyles({ value, helperTextPriority, width, success, toUppercase, showLabel, name});
    const [showPassword, setShowPassword] = useState(false);

    useEffect(() => {
        if (visibleThePassword) {
            setShowPassword(false)
        }
    }, [visibleThePassword])

    function handleShowPassword() {
        setShowPassword(!showPassword);
    }

    return (
        <div>
            <TextField
                onKeyDown={(event) => {
                    if (event.key === 'Enter') {
                        event.preventDefault();
                        if (onPressEnter) {
                            onPressEnter(event)
                        }
                    }
                }}
                style={style}
                onFocus={onFocus}
                label={label}
                variant={variant ? variant : 'outlined'}
                size={size || 'small'}
                value={value}
                name={name}
                multiline={multiline}
                rows={rows}
                onKeyPress={(event) => {
                    if (trim && type == "text") {
                        if (!value && event.key == " " || value.toString().endsWith(" ")) {
                            event.preventDefault()
                        }
                    }
                }}
                onBlur={() => {
                    if (typeof onBlur == 'function') {
                        onBlur()
                    }
                    if (trim && type == "text") {
                        if (onChange) {
                            onChange({
                                target: {
                                    'value': value.toString().trim()
                                }
                            })
                        }
                    }
                }}
                onChange={onChange}
                error={error}
                type={showPassword ? "text" : type}
                disabled={disabled}
                classes={{
                    root: multiline ? cx(classes.multiline) : cx(classes.root),
                }}
                placeholder={placeholder}
                inputProps={inputProps}
                InputLabelProps={InputLabelProps}
                //@ts-ignore
                InputProps={{
                    disableUnderline: disableUnderline,
                    inputProps: {
                        min: min,
                        maxLength: maxLength
                    },
                    startAdornment:
                        <>
                            {
                                visibleTheStartIcon &&
                                <InputAdornment position="start">
                                    <IconButton disableFocusRipple disableRipple className={cx(classes.startIcon)}>
                                        {startIcon}
                                    </IconButton>
                                </InputAdornment>
                            }
                            {
                                startText &&
                                <InputAdornment position="start">
                                    <p style={{ marginTop: '0px !important' }}>{startText} |</p>
                                </InputAdornment>
                            }
                        </>,
                    endAdornment: <>
                        {
                            visibleThePassword &&
                            <InputAdornment position="end">
                                <IconButton onClick={handleShowPassword} disableFocusRipple disableRipple className={cx(classes.endIcon)}>
                                    {showPassword ?
                                        <>
                                            {passwordVisibleOn ? passwordVisibleOn : <Visibility />}
                                        </>
                                        : <>{passwordVisibleOff ? passwordVisibleOff : <VisibilityOff />}</>
                                    }
                                </IconButton>
                            </InputAdornment>
                        }
                        <>
                            {
                                visibleTheEndIcon &&
                                <IconButton
                                    disableFocusRipple
                                    disableRipple
                                    className={cx(classes.endIcon)}
                                >
                                    {endIcon}
                                </IconButton>
                            }
                        </>
                    </>,
                }}
                // @ts-ignore
                slotProps={{
                    inputLabel: InputLabelProps,
                    input: {
                        disableUnderline: disableUnderline,
                        inputProps: {
                            min: min,
                            maxLength: maxLength
                        },

                    }
                }}
            />
            {helperText &&
                <Typography style={{ fontSize: '12px', fontWeight: 500}} color={helperTextPriority ? 'var(--grey-20) !important' : "var(--error-dark)"} pt="2px" pl="12px">
                    {helperText}
                </Typography>
            }
        </div>
    )
}
