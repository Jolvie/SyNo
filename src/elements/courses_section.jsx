import React from "react";
import CardCourses from "../usual_components/card_courses";
import subject_icon8 from "../../img/subject_icon8.png";
import BasicButton from "../usual_components/basic_SyNo_button";


export default function CoursesSection(props){
    return(
        <section className="coursesSection mt-6 pt-5  d-flex justify-content-center flex-column align-items-center container px-4 py-5">
            <div className="title d-flex justify-content-center flex-column align-items-center">
                <span className="color-grey" >#Top categories</span>
                <h1>Aperçu des cours proposés</h1>
            </div>
            <div className="row g-4 py-5 row-cols-1 row-cols-lg-3">
                {
                    props.matieres.map((matiere)=>{
                        return <CardCourses icon= {subject_icon8} title={matiere.title} link="#" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa consectetur quidem amet quibusdam quam similique facere alias reprehenderit debitis laudantium?" />
                    })
                }
            </div>
            <div>
                <BasicButton location="#" icons="ri-add-circle-fill" text="Voir plus..." optionalClassname="back-green" element="a" />
            </div>
        </section>
    )
}