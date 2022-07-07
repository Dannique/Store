import React from "react"
import { ThemeConsumer } from "styled-components"
import IconButton from '@mui/material/IconButton';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';

export default function ToggleMode() {
  return (
    <ThemeConsumer>
      {(theme) => {
        return (
          <IconButton  onClick={() => theme.setTheme(
                theme.mode === "dark" ? { mode: "light" } : { mode: "dark" }
              )}>
              {theme.mode === 'dark' ? <LightModeIcon style={{color:"white"}} /> : <DarkModeIcon style={{color:"black"}} />}
          </IconButton>

        )}}
    </ThemeConsumer>
  )
}
