import React, { useCallback, useState } from 'react'
import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import Controls from '@/features/UuidGenerator/Controls'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'
import TextField from '@mui/material/TextField'
import Snackbar, { SnackbarCloseReason } from '@mui/material/Snackbar'
import ContentCopyOutlinedIcon from '@mui/icons-material/ContentCopyOutlined'
import { ipcRenderer } from 'electron'
import { v4 } from 'uuid'

const UuidGenerator: React.FC = () => {
  const [uppercaseEnabled, setUppercaseEnabled] = useState<boolean>(true)
  const [uuidVersion, setUUIDVersion] = useState<string>('v4')
  const [count, setCount] = useState<number>(1)
  const [uuids, setUuids] = useState<string>('')
  const [copySucceeded, setCopySucceeded] = useState<boolean>(false)

  const generateUUIDs = useCallback(() => {
    for (const _i of new Array(count).keys()) {
      const uuid = uppercaseEnabled ? v4().toUpperCase() : v4()
      setUuids(uuids => uuids.length ? `${uuids}\n${uuid}` : uuid)
    }
  }, [ count, uppercaseEnabled, uuidVersion ])

  const copyUuidToClipboard = () => {
    ipcRenderer.invoke('copy', uuids)
      .then(() => {
        setCopySucceeded(true)
      })
  }

  const closeCopyAlert = (event: React.SyntheticEvent|Event, reason?: SnackbarCloseReason) => {
    if (reason === 'clickaway') {
      return
    }

    setCopySucceeded(false)
  }

  return (
    <Container fixed>
      <Typography variant='h5'>UUID Generator</Typography>
      <Box component='div' sx={{ display: 'flex', flexDirection: 'column', pt: 2 }}>
        <Typography variant='h6'>Configuration</Typography>
        <Controls
          uppercaseEnabled={ uppercaseEnabled }
          onUppercaseToggle={ e => setUppercaseEnabled(e) }
          uuidVersion={ uuidVersion }
          onUuidVersionChange={ e => setUUIDVersion(e) }
        />
      </Box>
      <Box component='div' sx={{ display: 'flex', flexDirection: 'column', mt: 4, gap: 1 }}>
        <Typography variant='subtitle1'>Generate</Typography>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <Button variant='contained' size='medium' sx={{ width: 200 }} onClick={ generateUUIDs }>Generate UUID(s)</Button>
          <Typography variant='subtitle2'>x</Typography>
          <FormControl>
            <Select value={count} onChange={ e => setCount(Number(e.target.value)) }>
              { [...new Array(5).keys() ].map(i =>
                <MenuItem value={ i + 1 } key={ i }>{ i + 1 }</MenuItem>
              ) }
            </Select>
          </FormControl>
        </Box>
      </Box>
      <Box sx={{ display: 'flex', flexDirection: 'column', mt: 2 }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
          <Typography variant='subtitle2'>UUID(s)</Typography>
          <Box sx={{ display: 'flex', gap: 1 }}>
            <Button
              variant='outlined'
              color='primary'
              startIcon={ <ContentCopyOutlinedIcon /> }
              onClick={ copyUuidToClipboard }
            >
              Copy
            </Button>
            <Button variant='outlined' onClick={ () => setUuids('') }>X</Button>
          </Box>
        </Box>
        <Box>
          <TextField multiline rows={ 10 } variant='filled' fullWidth value={ uuids } />
        </Box>
      </Box>
      <Snackbar
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        open={copySucceeded}
        autoHideDuration={2000}
        message="Copied to clipboard"
        onClose={closeCopyAlert}
      />
    </Container>
  )
}

export default UuidGenerator