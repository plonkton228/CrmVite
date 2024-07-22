import { useContext } from "react"
import { ThemeContext } from "Share/lib/ThemeContext/lib/ThemeContext"


 const MainPage = () => {
    const {theme, toggleTheme} = useContext(ThemeContext)
     return (<>
          <div className= {`app ${theme}`}>тест</div>
      <button onClick={() => toggleTheme(theme)}></button>
     </>)
}

export default MainPage