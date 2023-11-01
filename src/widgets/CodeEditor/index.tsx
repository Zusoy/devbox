import React from 'react'
import CodeMirror from '@uiw/react-codemirror'
import { githubDark } from '@uiw/codemirror-theme-github'
import { LanguageSupport } from '@codemirror/language'
import { markdown, markdownLanguage } from '@codemirror/lang-markdown'

declare type Language = 'markdown'
declare type LanguageMap = Record<Language, LanguageSupport>

const languageMap: LanguageMap = {
  'markdown': markdown({ base: markdownLanguage }),
}

interface Props {
  readonly value: string
  readonly readonly: boolean
  readonly language: Language
  readonly onChange: (value: string) => void
  readonly minWidth: string
  readonly maxWidth: string
  readonly minHeight: string
  readonly maxHeight: string
}

const CodeEditor: React.FC<Props> = ({
  value,
  readonly,
  language,
  minWidth,
  maxWidth,
  minHeight,
  maxHeight,
  onChange
}) =>
  <CodeMirror
    value={ value }
    theme={ githubDark }
    readOnly={ readonly }
    extensions={ [languageMap[language]] }
    minWidth={ minWidth }
    maxWidth={ maxWidth }
    minHeight={ minHeight }
    maxHeight={ maxHeight }
    onChange={ onChange }
  />

export default CodeEditor