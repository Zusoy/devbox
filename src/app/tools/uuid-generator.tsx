import { Tool } from '@/app/tool'
import routes from '@/app/routes'
import FingerprintOutlined from '@mui/icons-material/FingerprintOutlined'
import UUIDGeneratorComponent from '@/features/UuidGenerator'

const UUIDGenerator: Tool = {
  title: 'UUID Generator',
  description: 'Generates UUID',
  icon: <FingerprintOutlined fontSize='large' />,
  sidebarIcon: <FingerprintOutlined />,
  path: routes.uuidGenerator(),
  entrypoint: <UUIDGeneratorComponent />
}

export default UUIDGenerator