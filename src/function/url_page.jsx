import React from "react";
import { render } from "react-dom";

function TitlePage(){
    let array_current_page = (window.location.href).split( "/" )
    let last_element_index = array_current_page.length - 1
    let current_page = array_current_page[last_element_index]
    switch (current_page) {
        case "index.html" : 
            return "Home";
            break;
        default:
            return "SyNo";
            break;
    }
}

render(
    <TitlePage />,
    document.querySelector('.title-page')
)