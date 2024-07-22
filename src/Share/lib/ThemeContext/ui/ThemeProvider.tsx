import { useContext } from "react"
import { Theme, ThemeContext } from "../lib/ThemeContext"
import { useTheme } from "../lib/useTheme"
interface PropsThemeProvider {
    children: React.ReactElement,
}
export const ThemeProvider:React.FC<PropsThemeProvider> = ({children}) => {
    const {theme, toggleTheme } = useTheme()
    return (<>
    <ThemeContext.Provider value={{theme, toggleTheme}}>
          {children}
    </ThemeContext.Provider>
    
    </>)
}