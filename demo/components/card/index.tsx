import { Card } from '@/design/components/card'
import { Stack } from '@mui/material'

function CardComponent() {
    return (
        <>
            <Stack direction={'row'} style={{marginLeft:30}} spacing={2}>
                <div>
                <h3>Form:</h3>
                <Card type='frame' style={{width:120, height:120}}>
                </Card>
                </div>
                <div>
                <h3>Dashboard card:</h3>
                <Card type='featured' style={{width:120, height:120}}>
                </Card>
                </div>
                <div>
                <h3>Login card:</h3>
                <Card type='predominent' style={{width:120, height:120}}>
                </Card>
                </div>
            </Stack>
        </>
    )
}

export default CardComponent