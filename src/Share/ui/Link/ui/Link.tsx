import { Link } from "react-router-dom"
import { useClassName } from "Share/lib/useClassName/useClassName"
import cls from '../models/Link.module.scss'
export enum LinkTheme  {
  NAVIGATIONLINK = 'navigationLink'
}

interface LinkProps {
    children: React.ReactNode,
    theme: LinkTheme,
    to: string
}
export const LinkCustom: React.FC<LinkProps> = ({theme, to, children}) => {
    return (<>
    <Link
     className= {useClassName({mainClass:cls.Link, additinalClass: [cls[theme]] })} 
     to={to}
    >
        {children}
    </Link>
    </>)
}