import React from 'react'
import Box from '@mui/material/Box'
import FeatureControl from '@/widgets/FeatureControl'
import SelectFeatureControl, { Option } from '@/widgets/FeatureControl/SelectFeatureControl'
import AbcOutlinedIcon from '@mui/icons-material/AbcOutlined'
import TuneOutlinedIcon from '@mui/icons-material/TuneOutlined'
import Switch from '@mui/material/Switch'

interface Props {
  readonly uppercaseEnabled: boolean
  readonly uuidVersion: string
  readonly onUppercaseToggle: (e: boolean) => void
  readonly onUuidVersionChange: (e: string) => void
}

const Controls: React.FC<Props> = ({
  uppercaseEnabled,
  uuidVersion,
  onUppercaseToggle,
  onUuidVersionChange
}) => {
  const versions: Option[] = [
    {
      label: '4 (GUID)',
      value: 'v4'
    }
  ]

  return (
    <Box component='section' sx={{ display: 'flex', flexDirection: 'column', gap: 2, mt: 2 }}>
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
      <SelectFeatureControl
        label={'UUID Version'}
        icon={<TuneOutlinedIcon fontSize='large' />}
        options={versions}
        onChange={ e => onUuidVersionChange(e) }
        value={ uuidVersion }
      />
    </Box>
  )
}

export default Controls