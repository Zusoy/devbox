import React from 'react'
import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import DragIndicatorIcon from '@mui/icons-material/DragIndicator'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever'

interface Props {
  readonly name: string
  readonly onDelete: () => void
}

const Section: React.FC<Props> = ({ name, onDelete }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        gap: 2,
        minHeight: 50,
        minWidth: 200,
        alignItems: 'center',
        padding: 1,
        cursor: 'grab',
        flexShrink: 0
      }}
      component={Paper}
      elevation={10}
    >
      <DragIndicatorIcon />
      <Typography variant='body1'>{name}</Typography>
      <IconButton onClick={onDelete}>
        <DeleteForeverIcon />
      </IconButton>
    </Box>
  )
}

export default Section