import React from 'react'
import './Providers/GlobalStyles/Global.scss'
import { BrowserRouter } from 'react-router-dom'
import { Routs } from './Providers/Routing/Routs'
import { RoutsPaths } from './Providers/Routing/RoutList'
import { ThemeProvider } from 'Share/lib/ThemeContext/ui/ThemeProvider'
import { Navigation } from 'Widgets/Navigation/ui/Navigation'
export const App = () => {
    return (<>
    <ThemeProvider>
     <BrowserRouter>
     <div className='main'>
      <Navigation path={{ main: RoutsPaths.main ,about: RoutsPaths.about}}/>
      <Routs/>
     </div>
     </BrowserRouter>
    </ThemeProvider>
    </>)
}