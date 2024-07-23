import { useContext } from "react"
import { ThemeContext } from "Share/lib/ThemeContext/lib/ThemeContext"
import cls from '../models/MainPage.module.scss'
import { useClassName } from "Share/lib/useClassName/useClassName"

 const MainPage = () => {
    const {theme} = useContext(ThemeContext)
     return (<>
          <div className= {useClassName({mainClass: '', additinalClass: [theme]})}>

          </div>
     </>)
}

export default MainPage