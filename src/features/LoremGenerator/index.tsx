import React, { useEffect, useState } from 'react'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined'
import TagOutlinedIcon from '@mui/icons-material/TagOutlined'
import RefreshOutlinedIcon from '@mui/icons-material/RefreshOutlined'
import ContentCopyOutlinedIcon from '@mui/icons-material/ContentCopyOutlined'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import Snackbar, { SnackbarCloseReason } from '@mui/material/Snackbar'
import SelectFeatureControl, { Option } from '@/widgets/FeatureControl/SelectFeatureControl'
import { ipcRenderer } from 'electron'
import { LoremIpsum } from 'lorem-ipsum'

declare type TextType = 'paragraph' | 'word'

const LoremGenerator: React.FC = () => {
  const typeOptions: Option[] = [
    { label: 'Paragraph', value: 'paragraph' },
    { label: 'Word', value: 'word' }
  ]

  const [type, setType] = useState<TextType>('paragraph')
  const [length, setLength] = useState<number>(1)
  const [text, setText] = useState<string>('')
  const [copySucceeded, setCopySucceeded] = useState<boolean>(false)

  const copyUuidToClipboard = () => {
    ipcRenderer.invoke('copy', text)
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

  const generateText = () => {
    const lorem = new LoremIpsum()

    setText(
      type === 'paragraph'
        ? lorem.generateParagraphs(length)
        : lorem.generateWords(length)
    )
  }

  useEffect(() => {
    generateText()
  }, [type, length])

  return (
    <Container fixed>
      <Typography variant='h5'>Lorem Generator</Typography>
      <Box sx={{ display: 'flex', flexDirection: 'column', pt: 2, gap: 2 }}>
        <Typography variant='h6'>Configuration</Typography>
        <SelectFeatureControl
          label='Type'
          icon={<ArticleOutlinedIcon />}
          value={type}
          onChange={type => setType(type as TextType)}
          options={typeOptions}
        />
        <SelectFeatureControl
          label='Length'
          icon={<TagOutlinedIcon />}
          value={length.toString()}
          onChange={length => setLength(Number(length))}
          options={[...new Array(10).keys()].map(i => ({ value: (i + 1).toString(), label: (i + 1).toString() }))}
        />
      </Box>
      <Box sx={{ display: 'flex', flexDirection: 'column', mt: 2 }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
          <Typography variant='subtitle2'>Output</Typography>
          <Box sx={{ display: 'flex', gap: 1 }}>
            <Button
              variant='outlined'
              color='primary'
              startIcon={<RefreshOutlinedIcon />}
              onClick={() => generateText()}
            >
              Refresh
            </Button>
            <Button
              variant='outlined'
              color='primary'
              startIcon={<ContentCopyOutlinedIcon />}
              onClick={() => copyUuidToClipboard()}
            >
              Copy
            </Button>
          </Box>
        </Box>
        <Box>
          <TextField multiline rows={15} variant='filled' fullWidth value={text} />
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

export default LoremGenerator