import React from 'react'
import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import FormGroup from '@mui/material/FormGroup'
import Select from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'
import Typography from '@mui/material/Typography'

export declare type Option = { label: string, value: string }

interface Props {
  readonly label: string
  readonly icon: React.ReactElement
  readonly value: string
  readonly options: Option[]
  readonly onChange: (e: string) => void
}

const SelectFeatureControl: React.FC<Props> = ({ label, icon, options, value, onChange }) =>
  <Paper sx={{ display: 'flex', minHeight: 90, justifyContent: 'space-between' }} elevation={3}>
    <Box sx={{ display: 'flex', alignItems: 'center', ml: 2 }}>
      <Box sx={{ display: 'flex', gap: 4, alignItems: 'center' }}>
        <React.Fragment>{icon}</React.Fragment>
        <Typography variant='subtitle1'>{label}</Typography>
      </Box>
    </Box>
    <Box sx={{ display: 'flex', gap: 4, alignItems: 'center' }}>
      <FormGroup>
        <Select
          labelId={label}
          value={value}
          sx={{ pr: 2, mr: 2 }} onChange={e => onChange(e.target.value)}
        >
          {options.map(({ label, value }) =>
            <MenuItem key={value} value={value}>{label}</MenuItem>
          )}
        </Select>
      </FormGroup>
    </Box>
  </Paper>

export default SelectFeatureControl