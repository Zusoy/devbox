import React from 'react'
import { useNavigate } from 'react-router-dom'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'

interface Props {
  readonly label: string
  readonly to: string
  readonly icon: React.ReactNode
}

const Link: React.FC<Props> = ({ label, to, icon }) => {
  const navigate = useNavigate()

  return (
    <ListItem sx={{ display: 'flex' }} disablePadding>
      <ListItemButton onClick={ () => navigate(to) }>
        <ListItemIcon>
          { icon }
        </ListItemIcon>
        <ListItemText primary={ label } />
      </ListItemButton>
    </ListItem>
  )
}

export default Link