import React, { useState } from 'react'
import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Controls from '@/features/UuidGenerator/Controls'

const UuidGenerator: React.FC = () => {
  const [hyphensEnabled, setHyphensEnabled] = useState<boolean>(true)
  const [uppercaseEnabled, setUppercaseEnabled] = useState<boolean>(true)

  return (
    <Container fixed>
      <Typography variant='h5'>UUID Generator</Typography>
      <Box component='div' sx={{ display: 'flex', flexDirection: 'column', paddingTop: 2 }}>
        <Typography variant='h6'>Configuration</Typography>
        <Controls
          hyphensEnabled={ hyphensEnabled }
          onHyphensToggle={ e => setHyphensEnabled(e) }
          uppercaseEnabled={ uppercaseEnabled }
          onUppercaseToggle={ e => setUppercaseEnabled(e) }
        />
      </Box>
    </Container>
  )
}

export default UuidGenerator