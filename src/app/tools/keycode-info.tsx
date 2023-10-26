import { Tool } from '@/app/tool'
import routes from '@/app/routes'
import KeyboardAltOutlinedIcon from '@mui/icons-material/KeyboardAltOutlined'
import KeyboardInfoComponent from '@/features/KeycodeInfo'

const KeycodeInfo: Tool = {
  title: 'Keycode Info',
  description: 'Get details of the pressed key',
  icon: <KeyboardAltOutlinedIcon fontSize='large' />,
  sidebarIcon: <KeyboardAltOutlinedIcon />,
  path: routes.keyboard(),
  entrypoint: <KeyboardInfoComponent />
}

export default KeycodeInfo