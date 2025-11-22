import { Text } from '@/design/components/text';

export const TextComponent = () => {
  return (
    <div style={{padding: 20}}>
      <Text variant='h1' >Heading/h1</Text><br />
      <Text variant='h2'>Heading h2</Text><br />
      <Text variant='h3'>Heading h3</Text><br />
      <Text variant='h4'>Heading h4</Text><br />
      <Text variant='h5'>Heading h5</Text><br />
      <Text variant='title1'>Title / t1</Text><br />
      <Text variant='title2'>Title / t2</Text><br />
      <Text variant='title3'>Title/ t3</Text><br />
      <Text variant='title4'>Title/ t4</Text><br />
      <Text variant='body1'>Body / b1</Text><br />
      <Text variant='body2'>Body / b2</Text><br />
      <Text variant='body3'>Body / b3</Text><br />
      <Text variant='caption'>Caption</Text><br />
      <Text variant='buttontext'>Button text / btn1</Text><br />
      <Text variant='buttontext2'>Button text / btn1</Text>
    </div>
  )
}

