
import { AboutPage } from "Pages/AboutPage"
import { MainPage } from "Pages/MainPage"
import { RouteProps } from "react-router-dom"

export enum RoutName {
   MAIN = 'main',
   ABOUT = 'about'
}


export const RoutsPaths: Record<RoutName, string> = {
     [RoutName.MAIN]: '/',
     [RoutName.ABOUT]: '/about'
}


export const RoutList: Record<RoutName, RouteProps> = {
   [RoutName.MAIN]: {
    path: RoutsPaths.main,
    element: <MainPage/>
   },
   [RoutName.ABOUT]: {
    path: RoutsPaths.about,
    element: <AboutPage/>
   }
}