import { useContext } from "react"
import { ThemeContext } from "Share/lib/ThemeContext/lib/ThemeContext"

 const AboutPage = () => {
    const {theme, toggleTheme} = useContext(ThemeContext)
    return (<>
         <div className= {`app ${theme}`}>тестn</div>
     <button onClick={() => toggleTheme(theme)}></button>
    </>)
}

export default AboutPage