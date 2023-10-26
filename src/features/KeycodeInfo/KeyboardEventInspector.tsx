import React from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Paper from '@mui/material/Paper'

interface Props {
  readonly key: string
  readonly code: string
  readonly which: number
}

const KeyboardEventInspector: React.FC<Props> = ({ key, code, which }) => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 11, alignItems: 'center' }}>
      <Typography variant='h1' fontSize={ 200 }>{ which }</Typography>
      <Box sx={{ display: 'flex', gap: 2 }}>
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2 }}>
          <Typography variant='h6'>Which</Typography>
          <Paper square={false} sx={{ display: 'flex', padding: 10 }}>
            <Typography variant='h6'>{ which }</Typography>
          </Paper>
        </Box>
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2 }}>
          <Typography variant='h6'>Code</Typography>
          <Paper square={false} sx={{ display: 'flex', padding: 10 }}>
            <Typography variant='h6'>{ code }</Typography>
          </Paper>
        </Box>
      </Box>
    </Box>
  )
}

export default KeyboardEventInspector