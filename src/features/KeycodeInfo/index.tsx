import React, { useEffect, useState } from 'react'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Paper from '@mui/material/Paper'
import KeyboardEventInspector from '@/features/KeycodeInfo/KeyboardEventInspector'

const KeycodeInfo: React.FC = () => {
  const [eventTriggered, setEventTriggered] = useState<boolean>(false)
  const [which, setWhich] = useState<number | null>(null)
  const [key, setKey] = useState<string>('')
  const [code, setCode] = useState<string>('')

  const keyboardEventListener = (event: KeyboardEvent) => {
    setEventTriggered(true)
    setWhich(event.which)
    setCode(event.code)
    setKey(event.key)
  }

  useEffect(() => {
    document.addEventListener('keyup', keyboardEventListener)

    return () => {
      document.removeEventListener('keyup', keyboardEventListener)
    }
  }, [])

  return (
    <Container fixed>
      {!eventTriggered
        ? <React.Fragment>
            <Typography variant='h5'>Keyboard Info</Typography>
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <Paper square={false} sx={{ width: 500, flexGrow: 1, mt: 20 }} elevation={10}>
                <Box sx={{ display: 'flex', justifyContent: 'center', padding: 5 }}>
                  <Typography variant='h5'>Press any key to get the JavaScript event keycode</Typography>
                </Box>
              </Paper>
            </Box>
          </React.Fragment>
        : <React.Fragment>
            <KeyboardEventInspector code={code} which={which as number} key={key} />
          </React.Fragment>
      }
    </Container>
  )
}

export default KeycodeInfo