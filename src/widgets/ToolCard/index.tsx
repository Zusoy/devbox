import React from 'react'
import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'

interface Props {
  readonly icon: React.ReactElement
  readonly title: string
  readonly description: string
  readonly onClick: React.MouseEventHandler
}

const ToolCard: React.FC<Props> = ({ icon, title, description, onClick }) =>
  <Paper
    onClick={ onClick }
    sx={{ maxWidth: 150, pt: 5, pb: 5, pr: 2, pl: 2, cursor: 'pointer', '&:hover': { boxShadow: 10 }}}
  >
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2 }}>
      <Paper elevation={ 2 } sx={{ padding: 4 }}>{ icon }</Paper>
      <Box>
        <Typography variant='body1'>{ title }</Typography>
        <Typography variant='subtitle2'>{ description }</Typography>
      </Box>
    </Box>
  </Paper>

export default ToolCard