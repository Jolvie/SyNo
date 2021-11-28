import React from "react"
import BasicCardAbout from "./basic_card_about"

export default function AboutElement1(){
    return(
        <section className="about-element1 d-flex container mt-5 justify-content-between mb-5" id="about">
            <div className="w50_perc" >
                <h1 className="mb-4" >Nous sommes SyNo</h1>
                <div className="description_about">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit dignissimos debitis minus provident modi tenetur atque? Beatae aperiam error asperiores, recusandae quasi iure eligendi consectetur est dolor rerum amet facilis?</div>
            </div>
            <div className="d-flex align-items-center" >
                <BasicCardAbout icon="ri-add-circle-fill" title="Salut" detail="salut" />
                <BasicCardAbout icon="ri-user-fill" title="Pdf" detail="Exercices" />
                <BasicCardAbout icon="ri-add-circle-fill" title="Salut" detail="salut" />
            </div>
        </section>
    )
}