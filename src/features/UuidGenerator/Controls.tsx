import React from 'react'
import Box from '@mui/material/Box'
import FeatureControl from '@/widgets/FeatureControl'
import AbcOutlinedIcon from '@mui/icons-material/AbcOutlined'
import RemoveOutlinedIcon from '@mui/icons-material/RemoveOutlined'
import Switch from '@mui/material/Switch'

interface Props {
  readonly hyphensEnabled: boolean
  readonly uppercaseEnabled: boolean
  readonly onHyphensToggle: (e: boolean) => void
  readonly onUppercaseToggle: (e: boolean) => void
}

const Controls: React.FC<Props> = ({ hyphensEnabled, uppercaseEnabled, onHyphensToggle, onUppercaseToggle }) =>
  <Box component='section' sx={{ display: 'flex', flexDirection: 'column', gap: 2, mt: 2 }}>
    <FeatureControl
      icon={<RemoveOutlinedIcon fontSize='large' />}
      label={'Hyphens'}
      control={
        <Switch
          checked={hyphensEnabled}
          onChange={e => onHyphensToggle(e.target.checked)}
          inputProps={{ 'aria-label': 'controlled' }}
        />
      }
      controlLabel={hyphensEnabled ? 'On' : 'Off'}
    />
    <FeatureControl
      icon={<AbcOutlinedIcon fontSize='large' />}
      label={'Uppercase'}
      control={
        <Switch
          checked={uppercaseEnabled}
          onChange={e => onUppercaseToggle(e.target.checked)}
          inputProps={{ 'aria-label': 'controlled' }}
        />
      }
      controlLabel={uppercaseEnabled ? 'On' : 'Off'}
    />
  </Box>

export default Controls