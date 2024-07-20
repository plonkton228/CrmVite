import React from 'react'
import cls from './app.module.scss'
import { BrowserRouter } from 'react-router-dom'
import { Routs } from './Providers/Routing/Routs'
export const App = () => {
    return (<>
    <BrowserRouter>
      <Routs/>
    </BrowserRouter>
    </>)
}