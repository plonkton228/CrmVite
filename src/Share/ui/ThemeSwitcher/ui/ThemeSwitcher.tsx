import { useContext } from 'react'
import cls from '../models/ThemeSwitcher.module.scss'
import { Theme, ThemeContext } from 'Share/lib/ThemeContext/lib/ThemeContext'
import darkTheme from '../models/imgs/darkTheme.png'
import lightTheme from '../models/imgs/lightTheme.png'
export const ThemeSwitcher = () => {
    const {theme, toggleTheme} = useContext(ThemeContext)
    return (<>
     <button
     onClick={() => toggleTheme(theme)} 
     className= {cls.buttonSwitcher}>
        { theme === Theme.DARK ? <img src = {darkTheme}/> : <img src = {lightTheme}/>}
     </button>
    </>)
}