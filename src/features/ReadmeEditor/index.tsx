import React, { useEffect, useState } from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import CodeEditor from '@/widgets/CodeEditor'
import Section from '@/features/ReadmeEditor/Section'
import SectionPreset from '@/features/ReadmeEditor/SectionPreset'
import MarkdownPreview from '@uiw/react-markdown-preview'
import presets from '@/features/ReadmeEditor/presets'
import { Section as ISection } from '@/features/ReadmeEditor/section'

const ReadmeEditor: React.FC = () => {
  const [markdown, setMarkdown] = useState<string>('')
  const [sections, setSections] = useState<ISection[]>([])

  useEffect(() => {
    if (!sections.length) {
      setMarkdown('')
      return
    }

    setMarkdown(sections.map(s => s.content.trim()).join('\n'))
  }, [sections])

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center' }}>
      <Box sx={{ display: 'flex', gap: 3, pt: 5 }}>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            <Typography variant='h6'>Sections presets</Typography>
            {presets.map(({ name, content }, i) =>
              <SectionPreset
                key={i}
                name={name}
                onClick={() => setSections(
                  sections => [
                    ...sections,
                    ({ position: sections.length, content, name })
                  ])}
              />
            )}
          </Box>
        </Box>
        <Box>
          <Typography variant='h6'>Editor</Typography>
          <CodeEditor
            value={markdown}
            onChange={code => setMarkdown(code)}
            language='markdown'
            readonly={false}
            minWidth='500px'
            maxWidth='500px'
            minHeight='600px'
            maxHeight='600px'
          />
        </Box>
        <Box>
          <Typography variant='h6'>Preview</Typography>
          <MarkdownPreview
            source={markdown}
            style={{ minWidth: 500, minHeight: 600, maxHeight: 600, overflowY: 'scroll' }}
          />
        </Box>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, overflowY: 'scroll', maxHeight: 600, p: 2 }}>
          <Typography variant='h6'>Sections</Typography>
          {sections.map(({ name }, i) =>
            <Section
              key={i}
              name={name}
              onDelete={() => setSections(sections => sections.filter((_, c) => i !== c))}
            />
          )}
        </Box>
      </Box>
    </Box>
  )
}

export default ReadmeEditor