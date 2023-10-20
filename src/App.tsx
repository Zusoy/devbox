import React, { useCallback, useState } from 'react'
import routes from '@/app/routes'
import { HashRouter, Routes, Route } from 'react-router-dom'
import Theme from '@/app/Theme'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Appbar from '@/widgets/Appbar'
import Sidebar from '@/widgets/Sidebar'
import Link from '@/widgets/Sidebar/Link'
import Home from '@/features/Home'
import tools from '@/app/tools'

const App: React.FC = () => {
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(false)

  const toggleSidebar = useCallback(() => {
    setSidebarOpen(!sidebarOpen)
  }, [sidebarOpen])

  return (
    <HashRouter>
      <Theme>
        <Box sx={{ display: 'flex', minHeight: '100vh' }}>
          <Appbar open={sidebarOpen} toggleSidebar={toggleSidebar}></Appbar>
          <Sidebar open={sidebarOpen} toggleSidebar={toggleSidebar}>
            {tools.map(tool =>
              <Link
                key={tool.title.toLowerCase()}
                to={tool.path}
                label={tool.title}
                icon={tool.sidebarIcon}
              />
            )}
          </Sidebar>
          <Box component='main' sx={{ flexGrow: 1, overflow: 'auto' }} position='relative'>
            <Box component='main' sx={{ mt: 4 }}>
              <Toolbar />
              <Routes>
                <Route path={routes.homepage()} Component={Home} />
                {tools.map(tool =>
                  <Route key={tool.title.toLowerCase()} path={tool.path} element={tool.entrypoint} />
                )}
              </Routes>
            </Box>
          </Box>
        </Box>
      </Theme>
    </HashRouter>
  )
}

export default App