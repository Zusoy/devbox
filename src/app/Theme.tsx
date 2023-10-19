import React, { PropsWithChildren, createContext, useMemo, useState } from 'react'
import { createTheme, ThemeProvider, Theme as MuiTheme } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'

export type ThemeMode = 'light'|'dark'
export type ThemeModeToggler = () => void
export type ThemeContext = { toggleThemeMode: ThemeModeToggler }
export const ThemeContext = createContext<ThemeContext>({ toggleThemeMode: () => {} })

const Theme: React.FC<PropsWithChildren> = ({ children }) => {
  const [ themeMode, setThemeMode ] = useState<ThemeMode>('dark')

  const context = useMemo<ThemeContext>(
    () => ({
      toggleThemeMode: () => {
        setThemeMode(current => current === 'light' ? 'dark' : 'light')
      }
    }),
    []
  )

  const theme = useMemo<MuiTheme>(
    () => createTheme({
      palette: {
        mode: themeMode
      }
    }),
    [ themeMode ]
  )

  return (
    <ThemeContext.Provider value={ context }>
      <ThemeProvider theme={ theme }>
        <CssBaseline />
        { children }
      </ThemeProvider>
    </ThemeContext.Provider>
  )
}

export default Theme