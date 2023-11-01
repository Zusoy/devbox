import React from 'react'
import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'

interface Props {
  readonly name: string
  readonly onClick: () => void
}

const SectionPreset: React.FC<Props> = ({ name, onClick }) =>
  <Box
    sx={{
      display: 'flex',
      minHeight: 50,
      minWidth: 200,
      alignItems: 'center',
      padding: 1,
      cursor: 'pointer',
      flexShrink: 0
    }}
    component={ Paper }
    elevation={ 10 }
    onClick={onClick}
  >
    <Typography variant='body1'>{ name }</Typography>
  </Box>

export default SectionPreset