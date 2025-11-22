import { TextInputField } from '@/design/components/textinputfield';

export interface ParagraphProps {
    label?: string;
    variant?: 'outlined' | 'filled' | 'standard';
    size?: 'small' | 'medium';
    value?: string | number;
    error?: boolean;
    helperText?: string;
    onChange?: (e: any) => void;
    disabled?: boolean,
    placeholder?: string,
    min?: number,
    onFocus?: () => void,
    maxLength?: number,
    inputProps?: any
    trim?: boolean,
    InputLabelProps?: any;
    helperTextPriority?: 'low' | 'high';
}
export const Paragraph = ({ }: ParagraphProps) => {

    return (
        <>
            <div style={{ display: 'flex', gap: '50px' }}>
                <div>
                    <p style={{ color: '#000' }}>Normal</p>
                    <TextInputField
                        variant="filled"
                        label='Label'
                        rows={3}
                        multiline
                    />
                </div>
                <div>
                    <p style={{ color: '#000' }}>Disabled</p>
                    <TextInputField
                        variant="filled"
                        label={'label'}
                        disabled
                        rows={3}
                        multiline
                    />
                </div>
                <div>
                    <p style={{ color: '#000' }}>Validation</p>
                    <TextInputField
                        variant="filled"
                        label={'label'}                       
                        rows={3}
                        multiline
                        error={true}
                        helperText='This field is required'
                    />
                </div>
                <div>
                    <p style={{ color: '#000' }}>Low Priority</p>
                    <TextInputField
                    variant="filled"
                    label={'label'}
                    helperText='Informative text at low priority'
                    helperTextPriority='low'
                    rows={3}
                    multiline
                />
                </div>
            </div>
        </>
    )
}

