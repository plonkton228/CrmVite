import { RoutsPaths } from "App/Providers/Routing/RoutList"
import { Link } from "react-router-dom"
interface NavigationProps {
    path: typeof RoutsPaths
}
export const Navigation: React.FC<NavigationProps> = ({path}) => {
    return (<>
    <div>
        <div>
            <div></div>
            <div>
                <Link to = {path.main}>Главная</Link>
                <Link to = {path.about}>О системе</Link>
            </div>
            <div></div>
        </div>
    </div>
    
    </>)
}