import React, { PropsWithChildren } from 'react'
import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import FormGroup from '@mui/material/FormGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
import Typography from '@mui/material/Typography'

interface Props {
  readonly label: string
  readonly icon: React.ReactElement
  readonly control: React.ReactElement
  readonly controlLabel: string
}

const FeatureControl: React.FC<Props> = ({ label, icon, control, controlLabel }) =>
  <Paper sx={{ display: 'flex', minHeight: 90, justifyContent: 'space-between' }} elevation={ 3 }>
    <Box sx={{ display: 'flex', alignItems: 'center', ml: 2 }}>
      <Box sx={{ display: 'flex', gap: 4, alignItems: 'center' }}>
        { icon }
        <Typography variant='subtitle1'>{ label }</Typography>
      </Box>
    </Box>
    <Box sx={{ display: 'flex', gap: 4, alignItems: 'center' }}>
      <FormGroup>
        <FormControlLabel control={ control } label={ controlLabel } />
      </FormGroup>
    </Box>
  </Paper>

export default FeatureControl