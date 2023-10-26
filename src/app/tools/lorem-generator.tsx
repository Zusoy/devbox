import { Tool } from '@/app/tool'
import routes from '@/app/routes'
import FormatQuoteIcon from '@mui/icons-material/FormatQuote'
import LoremGeneratorComponent from '@/features/LoremGenerator'

const LoremGenerator: Tool = {
  title: 'Lorem Ipsum',
  description: 'Generate dummy text as placeholder content',
  icon: <FormatQuoteIcon fontSize='large' />,
  sidebarIcon: <FormatQuoteIcon />,
  path: routes.loremGenerator(),
  entrypoint: <LoremGeneratorComponent />
}

export default LoremGenerator