import React from 'react'
import { LinearProgressBar } from '@/design/components/progress/bar'
import { Stack } from '@mui/material'
import { CircularProgressBar } from '@/design/components/progress/circular'

function ProgressComponent() {
    return (
        <div style={{ margin: 10 }}>
            {/* <Stack direction={'row'}>
                <Stack direction={'column'}>
                    <p>Determinate - Progress Bar :</p>
                    <LinearProgressBar color='primary' variant='determinate' value={40}/> <br />
                    <LinearProgressBar variant='determinate' value={30} color='secondary' /><br />
                </Stack>
                <Stack direction={'column'} style={{ marginLeft: 80 }}>
                    <p>Indeterminate - Progress Bar :</p>
                    <LinearProgressBar variant='indeterminate' color='primary' /><br />
                    <LinearProgressBar variant='indeterminate' color='secondary' /><br />
                </Stack>
            </Stack> */}
            <Stack direction={'row'}>
                <Stack direction={'column'}>
                <p>Determinate - Circular Progress Bar :</p>
                    <CircularProgressBar color='primary' variant='determinate' value={40} />
                    <br />
                    <CircularProgressBar color='secondary' variant='determinate' value={80} />
                    <br />
                      <p>with label:</p>

                    <CircularProgressBar color='primary' variant='determinate' value={40} showLabel/>
                    <br />
                    <CircularProgressBar color='secondary' variant='determinate' value={80} showLabel/>
                </Stack>
                <Stack direction={'column'} style={{ marginLeft: 40 }}>
                <p>Indeterminate - Circular Progress :</p>
                <CircularProgressBar color='primary' />
                    <br />
                    <CircularProgressBar color='secondary' />
                    <br />
                    <CircularProgressBar color='teritary' />
                    <br />
                    <p>Indeterminate - Circular Progress :</p>
                    <CircularProgressBar color='primary' size='small' />
                    <br />
                    <CircularProgressBar color='secondary' size='small' />
                    <br />
                    <CircularProgressBar color='teritary' size='small'  />

                </Stack>
            </Stack>
        </div>
    )
}

export default ProgressComponent