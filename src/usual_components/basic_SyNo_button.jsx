import React from "react";

export default function BasicButton(props){
    return(
        <props.element href={props.location} className = {"BasicButton "+ props.optionalClassname } ><i className={props.icons} ></i> {props.text} </props.element>
    )
}