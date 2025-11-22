import { useState } from 'react';
// import '@/app/ui/component/application/index.css'
import '@/font.css';

import { SimpleButton } from "@/design/components/button/simple";
import { DatePicker } from "@/design/components/datepicker/simple";
import { TimePicker } from "@/design/components/timepicker/index";
import { Card } from '@/design/components/card';
import { Checkbox } from '@/design/components/checkbox';
import { Dialog } from '@/design/components/dialog/index';
import { Text } from '@/design/components/text';
// import AddIcon from '@mui/icons-material/Add';
import { Chip } from '@/design/components/chip';
import { SearchBar } from "@/design/components/search";
import CloseIcon from '@mui/icons-material/Close';
import { Autocomplete } from '@/design/components/picker/autocomplete/simple';
import { TextInputField } from '@/design/components/textinputfield';
import { DesignIconsDummyOutlineIcon } from "@/design/icons/dummy/outline";

import { Paragraph } from '@/design/components/demo/components/paragraph';
import { IconButton } from '@/design/components/button/icon';



interface DropdownType {
  id: string;
  name: string;
}

export function DesignComponentsDemo() {
  //use state for editoption in data grid using context
  const [dialogOpen, setDialogOpen] = useState(false)
  const [chipData, setChipData] = useState(['Text1', "Text2", "Text3"]);
  const [value, setValue] = useState('');

  const deleteChip = () => {
    alert('deleted')
  }

  const deleteChipData = (index: number) => {
    const data = [...chipData];
    data.splice(index, 1)
    setChipData(data)
  }

  const [picker, setPicker] = useState('')
  const dropdownOptions = [
    {
      label: 'input',
      id: '1'
    },
    {
      label: 'text',
      id: '2',
    },
    {
      label: 'chip',
      id: '3'
    },
    {
      label: 'search',
      id: '4'
    },
    {
      label: 'button',
      id: '5'
    },
    {
      label: 'avatar',
      id: '6'
    },
    {
      label: 'input',
      id: '1'
    },
    {
      label: 'text',
      id: '2',
    },
    {
      label: 'chip',
      id: '3'
    },
    {
      label: 'search',
      id: '4'
    },
    {
      label: 'button',
      id: '5'
    },
    {
      label: 'avatar',
      id: '6'
    }

  ]

  return (
    <div style={{ backgroundColor: 'white' }}>
      <br />
      <SimpleButton color='primary' disableRipple={true}>VSS-primary</SimpleButton>
      <SimpleButton color='primary' disabled>VSS-primary</SimpleButton>
      <SimpleButton color='primary' startIcon={<DesignIconsDummyOutlineIcon />} disableRipple>Pressed</SimpleButton>
      <SimpleButton color='primary' startIcon={<DesignIconsDummyOutlineIcon />} disabled>VSS-primary  icon</SimpleButton>
      <SimpleButton color='secondary' disableRipple>VSS-sec</SimpleButton>
      <SimpleButton color='secondary' disabled >VSS-sec</SimpleButton>
      <SimpleButton color='secondary' startIcon={<DesignIconsDummyOutlineIcon />} disableRipple>Pressed</SimpleButton>
      <SimpleButton color='secondary' startIcon={<DesignIconsDummyOutlineIcon />} disabled>VSS-sec icon disable</SimpleButton>
      <SimpleButton variant='text' disableRipple>VSS-text</SimpleButton>
      <SimpleButton variant='text' disabled>VSS-text</SimpleButton>
      <SimpleButton variant='text' startIcon={<DesignIconsDummyOutlineIcon />} disableRipple>VSS-text</SimpleButton>
      <SimpleButton variant='text' startIcon={<DesignIconsDummyOutlineIcon />} disabled>VSS-text disable</SimpleButton>
      <SimpleButton variant='elevated' disableRipple>VSS-elevated</SimpleButton>
      <SimpleButton variant='elevated' disabled>VSS-elevated</SimpleButton>
      <SimpleButton variant='elevated' disableRipple startIcon={<DesignIconsDummyOutlineIcon />}>pressed</SimpleButton>
      <SimpleButton variant='elevated' startIcon={<DesignIconsDummyOutlineIcon />} disabled>VSS-elevated disable </SimpleButton>
      <SimpleButton color='info'>VSS-info</SimpleButton><br />

      <SearchBar value={value} onChange={(e) => setValue(e.target.value)} placeholder='Search' mode='light' />
      <SearchBar value={value} onChange={(e) => setValue(e.target.value)} placeholder='Search' mode='light' disabled />
      <SearchBar value={value} onChange={(e) => setValue(e.target.value)} placeholder='Search' mode='dark' disabled />
      <SearchBar placeholder='Search' mode='dark' />


      <div style={{ margin: 10 }}>
        {/* textinput */}
        <TextInputField
          placeholder='Username'
          onChange={() => console.log('ok')}
          error={false}
          width='medium'
        />
        {/*  textinput error */}
        <TextInputField
          placeholder='Password'
          onChange={() => console.log('ok')}
          error={true}
          helperText='This field is required*'
          width='medium'
          type='password'
        />
        {/*  textinput helper text */}
        <TextInputField
          placeholder='Input with low priority'
          onChange={() => console.log('ok')}
          helperText='This field is required*'
          width='medium'
          helperTextPriority='low'
        />
        <TextInputField
          placeholder='Input with high priority'
          onChange={() => console.log('ok')}
          helperText='This field is required*'
          width='medium'
          helperTextPriority='high'
        />
        {/*  textinput disabled */}
        <TextInputField
          placeholder='Disable'
          disabled={true}
          onChange={() => console.log('ok')}
          width='medium'
        />
        {/* textinput number */}
        <TextInputField
          type='number'
          placeholder='Number input'
        />
        <TextInputField
          type='number'
          placeholder='Number input with high'
          helperText='This field is required*'
          helperTextPriority='high'
        />
        <TextInputField
          type='number'
          placeholder='Number input with error'
          error={true}
          helperText='This field is required*'
        />
        <TextInputField
          type='number'
          placeholder='Number input with error'
          helperText='This field is required*'
          helperTextPriority='low'
        />
        <TextInputField
          type='number'
          placeholder='Number input with disable'
          disabled={true}
        />

        {/* input with clear icon */}
        <TextInputField
          placeholder='input with clear Icon'
          visibleTheEndIcon={true}
        />

        {/* disable clear icon */}
        <TextInputField
          placeholder='Input with clear Icon'
          visibleTheEndIcon={true}
          disabled={true}
        />
        <TextInputField
          placeholder='Input with clear Icon'
          visibleTheEndIcon={true}
          error={true}
          helperText='This field is required*'
        />
        {/* start icon input */}
        <TextInputField
          placeholder='Input with start Icon'
          visibleTheStartIcon={true}
        />
        {/* start icon input error */}
        <TextInputField
          placeholder='Input with start Icon'
          visibleTheStartIcon={true}
          error={true}
          helperText='This field is required*'

        />
        {/* start icon input */}
        <TextInputField
          placeholder='Input with start Icon'
          visibleTheStartIcon={true}
          disabled={true}
        />
        {/* start icon and end icon input */}
        <TextInputField
          placeholder='Input with start Icon and end icon'
          visibleTheStartIcon={true}
          visibleTheEndIcon={true}
        />
        <TextInputField
          placeholder='Input with start Icon and end icon'
          visibleTheStartIcon={true}
          visibleTheEndIcon={true}
        />

        {/* only helper text */}
        <TextInputField
          placeholder='Input with start Icon and end icon'
          visibleTheStartIcon={true}
          visibleTheEndIcon={true}
          helperText='I am helper text'
        />
        {/* disable*/}
        <TextInputField
          placeholder='Input with start Icon and end icon'
          visibleTheStartIcon={true}
          visibleTheEndIcon={true}
          disabled
        />
        {/*  minium three rows */}
        <TextInputField
          placeholder='Label'
          rows={3}
          multiline={true}
        />
        {/*  minium three rows with error*/}
        <TextInputField
          placeholder='Label'
          rows={4}
          multiline={true}
          error={true}
          helperText='This field is required*'
        />
        {/*  minium three rows with error*/}
        <TextInputField
          placeholder='Label'
          rows={4}
          multiline={true}
          helperText='This field is required*'
          helperTextPriority='low'
        />
        <TextInputField
          placeholder='Label'
          rows={4}
          multiline={true}
          helperText='This field is required*'
          helperTextPriority='high'
        />
        {/*  minium three rows with error*/}
        <TextInputField
          placeholder='Label'
          rows={4}
          multiline={true}
          disabled
        />
      </div>
      Checkbox:
      <Checkbox />
      <br />
      Icon SimpleButton:
      <IconButton mode='light' disableRipple>
        <DesignIconsDummyOutlineIcon />
      </IconButton>
      Icon SimpleButton Disable:
      <IconButton mode='light' disableRipple disabled>
        <DesignIconsDummyOutlineIcon />
      </IconButton>
      outline icon button:
      <br />
      <IconButton color='secondary' disableRipple >
        <DesignIconsDummyOutlineIcon />
      </IconButton>
      <IconButton color='secondary' disableRipple disabled>
        <DesignIconsDummyOutlineIcon />
      </IconButton>
      <IconButton variant='filled' disableRipple>
        <DesignIconsDummyOutlineIcon />
      </IconButton>
      <IconButton variant='filled' disableRipple disabled>
        <DesignIconsDummyOutlineIcon />
      </IconButton>
      <br />
      dark Background:
      <IconButton mode='dark' disableRipple >
        <DesignIconsDummyOutlineIcon />
      </IconButton>
      <IconButton mode='dark' disableRipple disabled>
        <DesignIconsDummyOutlineIcon />
      </IconButton>
      <IconButton disableRipple >
        <DesignIconsDummyOutlineIcon />
      </IconButton>
      <IconButton disableRipple disabled>
        <DesignIconsDummyOutlineIcon />
      </IconButton>
      <div>
        <div style={{ float: 'left', marginRight: '10px' }}>
          Date Picker :
          <DatePicker value={new Date()} onChange={(date) => {
            setTimeout(() => {
              alert(date.toISOString())
            }, 500);
          }} />
        </div>
        <div>
          TimePicker:
          <TimePicker value={new Date()} onChange={(date) => {
            setTimeout(() => {
              alert(date.toISOString())
            }, 500);
          }} />
        </div>
      </div>
      Dialog:
      <SimpleButton color="info" onClick={() => setDialogOpen(true)} >
        Click Me
      </SimpleButton>
      <Dialog open={dialogOpen} title="hello" close={() => setDialogOpen(false)} >
        <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Error ratione porro, ullam officiis est labore incidunt numquam laudantium mollitia provident minima? Asperiores maxime sed aliquam nesciunt ratione voluptatem debitis reiciendis.
        </Text>
      </Dialog>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        <Text> Card:</Text>
        <div style={{ width: '250px' }}>
          <Card>Elevation 1</Card>
        </div>
        <div style={{ width: '250px' }}>
          <Card elevation={2}>Elevation 2</Card>
        </div>
        <div style={{ width: '250px' }}>
          <Card elevation={3}>Elevation 3</Card>
        </div>
      </div>
      <div>
        Text:<div className='textContainer' style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', columnGap: '15px' }}>
          <Text variant='h1' >Heading/h1</Text>
          <Text variant='h2'>Heading h2</Text>
          <Text variant='h3'>Heading h3</Text>
          <Text variant='h4'>Heading h4</Text>
          <Text variant='h5'>Heading h5</Text>
          <Text variant='title1'>Text title1</Text>
          <Text variant='title2'>Text title2</Text>
          <Text variant='title3'>Text title3</Text>
          <Text variant='body1'>Text body1</Text>
          <Text variant='body2'>Text body2</Text>
          <Text variant='body3'>Text body3</Text>
          <Text variant='caption'>Text caption</Text>
          <Text variant='buttontext'>Text body3</Text>
          <Text variant='error'>Text error*</Text>
        </div>
      </div>
      <div style={{ display: 'flex', flexDirection: 'row', columnGap: '5px' }}>
        <>
          <Chip label='Enabled' />
          <Chip label='Enabled' starticon={<DesignIconsDummyOutlineIcon />} />
          <Chip label={'Enabled'} deleteIcon={<DesignIconsDummyOutlineIcon />} onDelete={() => deleteChip()} />
          <Chip label='Success' color='success' />
          <Chip label='Informative' color='info' />
          <Chip label='Warning' color='warning' />
          <Chip label='Error' color='error' />
          <Chip label='Enabled' starticon={<DesignIconsDummyOutlineIcon />} onDelete={() => deleteChip()} deleteIcon={<DesignIconsDummyOutlineIcon />} />

        </>
      </div>
      {/* paragraph */}
      <Paragraph />
      <div style={{ display: 'flex', flexDirection: 'row', gap: '5px', marginTop: '5px' }} >
        {
          chipData.map((data, index) => {
            return (
              <>
                <Chip key={index} label={data} deleteIcon={<CloseIcon />} onDelete={() => deleteChipData(index)} />
              </>
            )
          })
        }
      </div>
      <div style={{ margin: '5px' }}>
        <TextInputField value={value} />
        <Autocomplete value={picker} onChange={(e) => setPicker(e.target.label)} options={dropdownOptions} placeholder={'Placeholder'} />
      </div>
    </div>
  );
}
