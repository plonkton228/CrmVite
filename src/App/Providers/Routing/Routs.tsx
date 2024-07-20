import { Route, Routes } from "react-router-dom"
import { RoutList } from "./RoutList"
import { Suspense } from "react"

export const Routs = () => {
    return (<>
    <Routes>
        <Suspense fallback = {<div>Loading...</div>}>
         {
            Object.values(RoutList).map(({path, element}) => <Route path= {path} element = {element}/>)
         }
        </Suspense>
    </Routes>
    </>)
}