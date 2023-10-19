import React, { useCallback, useState } from 'react'
import routes from '@/app/routes'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Theme from '@/app/Theme'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Appbar from '@/widgets/Appbar'
import Sidebar from '@/widgets/Sidebar'

const App: React.FC = () => {
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(false)

  const toggleSidebar = useCallback(() => {
    setSidebarOpen(!sidebarOpen)
  }, [sidebarOpen])

  return (
    <BrowserRouter>
      <Theme>
        <Box sx={{ display: 'flex', minHeight: '100vh' }}>
          <Appbar open={sidebarOpen} toggleSidebar={toggleSidebar}></Appbar>
          <Sidebar open={sidebarOpen} toggleSidebar={toggleSidebar}></Sidebar>
          <Box component='main' sx={{ flexGrow: 1, overflow: 'auto' }} position='relative'>
            <main>
              <Toolbar />
              <Routes>
                <Route path={ routes.homepage() } element={ <p>Home</p> } />
              </Routes>
            </main>
          </Box>
        </Box>
      </Theme>
    </BrowserRouter>
  )
}

export default App