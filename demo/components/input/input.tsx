import { useState } from 'react'
import { TextInputField } from '@/design/components/textinputfield';


export const Input = () => {

    return (
        <div style={{padding: 50}}>
            <div style={{ display: 'flex', gap: '50px' }}>
                <div>
                    <p style={{ color: '#000' }}>Normal</p>
                    <TextInputField
                        variant="filled"
                        label={'Label'}
                    />
                </div>
                <div>
                    <p style={{ color: '#000' }}>Disabled</p>
                    <TextInputField
                        variant="filled"
                        label={'Label'}
                        disabled
                        InputLabelProps={{shrink: false}}
                    />
                </div>
                <div>
                    <p style={{ color: '#000' }}>Validation</p>
                    <TextInputField
                        variant="filled"
                        label={'Label'}
                        error={true}
                        helperText='This field is required'
                    />
                </div>
                <div>
                    <p style={{ color: '#000' }}>Low Priority</p>
                    <TextInputField
                        variant="filled"
                        label={'Label'}
                        helperText='Informative text at low priority'
                        helperTextPriority='low'
                    />
                </div>
            </div>
            
        </div>
    )
}