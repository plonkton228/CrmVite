import { useState } from "react"
import { Theme } from "./ThemeContext"

export const useTheme = () => {
   const [theme, setTheme] = useState<Theme>(localStorage.getItem('theme') as Theme || Theme.DARK)
   const toggleTheme = (themeArg: Theme) => {
      if (themeArg === Theme.DARK) {
        setTheme(() => {
          localStorage.setItem('theme', Theme.LIGHT)
          return Theme.LIGHT
        })
      } else {
        setTheme( () => { 
          localStorage.setItem('theme', Theme.DARK)
          return Theme.DARK })
      }
   }
   return {
    theme : theme,
    toggleTheme: toggleTheme
   }
}