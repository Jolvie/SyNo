import "../css/bootstrap.min.css"
import "../css/style.css"
import React from "react"
import {render} from "react-dom"
import Home from "./pages/home"
import "../RemixIcon_Fonts_v2.5.0/fonts/remixicon.css"

class App extends React.Component{
    render(){
       return(
          <Home />
       )
    }
}

render( 
    <App />,
    document.querySelector('.app')
)