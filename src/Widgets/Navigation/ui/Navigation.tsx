import { RoutsPaths } from "App/Providers/Routing/RoutList"
import { useContext } from "react"
import { Link } from "react-router-dom"
import { ThemeContext } from "Share/lib/ThemeContext/lib/ThemeContext"
import cls from '../models/Navigation.module.scss'
import { useClassName } from "Share/lib/useClassName/useClassName"
import { ThemeSwitcher } from "Share/ui/ThemeSwitcher"
import { LinkCustom } from "Share/ui/Link"
import { LinkTheme } from "Share/ui/Link/ui/Link"
interface NavigationProps {
    path: typeof RoutsPaths
}
export const Navigation: React.FC<NavigationProps> = ({path}) => {
    const {theme } = useContext(ThemeContext)
    return (<>
    <div className= {useClassName({mainClass: cls.navBar, additinalClass: [theme]})}>
        <div className= {useClassName({mainClass: 'container', additinalClass: [cls.innerContainerNavBar]})}>
            <div>
                <ThemeSwitcher/>
            </div>
            <div className= {cls.addressesContainer}>
                 <LinkCustom to= {path.main} theme={LinkTheme.NAVIGATIONLINK}>Главная</LinkCustom>
                 <LinkCustom to= {path.about} theme={LinkTheme.NAVIGATIONLINK}>О системе</LinkCustom>
            </div>
            <div></div>
        </div>
    </div>
    
    </>)
}