import React from "react";

export default function BasicCardAbout(props){
    return(
        <div className="card_about d-flex flex-column justify-content-center align-items-center mr">
            <div className="visible mb-3 text-center">
                <div className="mb-3" ><i className={"icon "+ props.icon}></i></div>
                <h3> {props.title} </h3>
            </div>
            <span>{props.detail}</span>
        </div>
    )
}