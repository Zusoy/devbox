import React, { PropsWithChildren } from 'react'
import routes from '@/app/routes'
import MuiDrawer from '@mui/material/Drawer'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import ChevronLeft from '@mui/icons-material/ChevronLeft'
import List from '@mui/material/List'
import Divider from '@mui/material/Divider'
import Link from '@/widgets/Sidebar/Link'
import HomeIcon from '@mui/icons-material/HomeOutlined'
import { styled } from '@mui/material/styles'

interface Props extends PropsWithChildren {
  readonly open: boolean
  readonly toggleSidebar: () => void
}

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    '& .MuiDrawer-paper': {
      position: 'relative',
      whiteSpace: 'nowrap',
      width: 240,
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
      boxSizing: 'border-box',
      ...(!open && {
        overflowX: 'hidden',
        transition: theme.transitions.create('width', {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
        width: theme.spacing(7),
        [theme.breakpoints.up('sm')]: {
          width: theme.spacing(9),
        },
      }),
    },
  }),
)

const Sidebar: React.FC<Props> = ({ open, toggleSidebar, children }) =>
  <Drawer open={open} variant='permanent'>
    <Toolbar
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        px: [1]
      }}
    >
      <IconButton onClick={toggleSidebar}>
        <ChevronLeft />
      </IconButton>
    </Toolbar>
    <Divider />
    <List>
      <Link
        icon={ <HomeIcon /> }
        label={ 'All tools' }
        to={ routes.homepage() }
      />
      <Divider />
      {children}
    </List>
  </Drawer>

export default Sidebar