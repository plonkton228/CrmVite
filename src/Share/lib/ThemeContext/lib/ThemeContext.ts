import { createContext } from "react";
import { useTheme } from "./useTheme";

export enum Theme {
    LIGHT = 'light',
    DARK = 'dark'
}
interface ContextProps {
    theme?: Theme,
    toggleTheme?: (theme: Theme) => void
}
const initialTheme = localStorage.getItem('theme') as Theme || Theme.DARK
const  defaultContext: ContextProps = {
      theme: initialTheme,
}
export const ThemeContext = createContext<ContextProps>(defaultContext)