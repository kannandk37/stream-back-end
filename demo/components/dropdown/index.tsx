import { useState } from 'react'
import { Autocomplete } from '@/design/components/picker/autocomplete/simple'
import { MultiPicker } from '@/design/components/picker/autocomplete/multi'
import { AutocompleteOption } from './option/autocomplete'
import { DesignIconsClaimFollowUpDuotoneIcon } from '@/design/icons/claim-follow-up/duotone'

let options = [
    { id: '01', label: 'option', count: 20 },
    { id: '02', label: 'option', count: 20 },
    { id: '03', label: 'option', count: 20 },
]
export const Dropdown = () => {
    const [picker, setPicker] = useState('')
    const [select, setSelect] = useState(options)

    return (
        <div style={{ padding: '2rem' }}>
            <div>
                <h3 style={{ color: '#000' }}>Dropdown Component</h3>
                <div style={{ display: 'flex', gap: '2rem' }}>
                    <Autocomplete
                        options={select}
                        value={select}
                        placeholder={'label'}
                        onChange={(e) => setPicker(e)}
                        variant='outline'
                    />
                    <Autocomplete
                        options={select}
                        value={select}
                        placeholder={'label'}
                        onChange={(e) => setPicker(e)}
                        variant='filled'
                        helpertext='This field is required'
                        error
                    />
                    <Autocomplete
                        options={select}
                        value={select}
                        disabled
                        placeholder={'label'}
                        onChange={(e) => setPicker(e)}
                        variant='filled'
                    />
                </div>
            </div>
            <div >
                <h3 style={{ color: '#000' }}>Dropdown Multiple Component</h3>
                <div style={{ display: 'flex', gap: '2rem' }}>
                    <MultiPicker
                        options={select}
                        placeholder={'Label'}
                        onSelect={() => console.log('ok')}
                    />
                    <MultiPicker
                        options={select}
                        placeholder={'Label'}
                        onSelect={() => console.log('ok')}
                        helpertext='This field is required'
                        error
                    />
                    <MultiPicker
                        options={select}
                        placeholder={'Label'}
                        onSelect={() => console.log('ok')}
                        disabled
                    />
                </div>
            </div>
            <div >
                <h3 style={{ color: '#000' }}>Option</h3>
                <div style={{ display: 'flex', gap: '2rem' }}>
                    <Autocomplete
                        options={select}
                        value={select}
                        placeholder={'label'}
                        onChange={(e) => setPicker(e)}
                        variant='filled'
                        followUp={true}
                        startIcon={<DesignIconsClaimFollowUpDuotoneIcon color='var(--black-10)' width='20px' height='20px'/>}
                        followUpValue={"20"}
                    />
                    <AutocompleteOption
                        options={select}
                        value={select}
                        placeholder={'label'}
                        onChange={(e) => setPicker(e)}
                        variant='filled'
                        disabled
                    />
                </div>
            </div>
        </div>
    )
}

