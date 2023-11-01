import { Tool } from '@/app/tool'
import routes from '@/app/routes'
import TextSnippetIcon from '@mui/icons-material/TextSnippet'
import ReadmeEditorComponent from '@/features/ReadmeEditor'

const ReadmeEditor: Tool = {
  title: 'Readme Editor',
  description: 'Readme editor for your projects',
  icon: <TextSnippetIcon fontSize='large' />,
  sidebarIcon: <TextSnippetIcon />,
  path: routes.readmeEditor(),
  entrypoint: <ReadmeEditorComponent />
}

export default ReadmeEditor