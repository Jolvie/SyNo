import React from "react";
import Header from "../elements/header.jsx"
import Banner  from "../elements/banner"
import AboutElement1 from "../usual_components/about_element1.jsx";
import CoursesSection from "../elements/courses_section.jsx";

const matieres = [
    {
        title : "Math",
        description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa consectetur quidem amet quibusdam quam similique facere alias reprehenderit debitis laudantium?",
        icon:""
    },
    {
        title : "Français",
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa consectetur quidem amet quibusdam quam similique facere alias reprehenderit debitis laudantium?",
        icon:""
    },
    {
        title : "Physiques",
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa consectetur quidem amet quibusdam quam similique facere alias reprehenderit debitis laudantium?",
        icon:""
    }
]

export default function Home(){
    return (
        <div>
            <div className = "head_page" >
                <div className="surcouche" >
                    <Header />
                    <Banner />
            </div>
        </div>
        <AboutElement1 />
        <CoursesSection matieres={matieres} limit="3" />
    </div>

    )
}