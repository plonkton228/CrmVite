import { Route, Routes } from "react-router-dom"
import { RoutList } from "./RoutList"
import { Suspense } from "react"
import { MainPage } from "Pages/MainPage"

export const Routs = () => {
    return (<>
    <Suspense fallback = {<div>Loading...</div>}>
     <Routes>
         {
            Object.values(RoutList).map(({path, element}) => <Route key = {path} path= {path} element = {element}/>)
         }
     </Routes>
    </Suspense>
    </>)
}