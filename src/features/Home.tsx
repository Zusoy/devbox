import React from 'react'
import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import ToolCard from '@/widgets/ToolCard'
import tools from '@/app/tools'
import { useNavigate } from 'react-router-dom'

const Home: React.FC = () => {
  const navigate = useNavigate()

  return (
    <Container fixed>
      <Typography variant='h5'>All tools</Typography>
      <Box sx={{ display: 'flex', paddingTop: 2, gap: 3 }}>
        {tools.map(tool =>
          <ToolCard
            onClick={ () => navigate(tool.path) }
            key={tool.title.toLowerCase()}
            title={tool.title}
            description={tool.description}
            icon={tool.icon}
          />
        )}
      </Box>
    </Container>
  )
}

export default Home