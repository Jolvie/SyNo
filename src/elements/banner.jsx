import React from "react";
import BasicButton from "../usual_components/basic_SyNo_button";

export default function Banner(){
    return(
        <section className="banner-SyNo container d-flex justify-content-between align-items-center">
                <div className="mb-3" >
                    <h1 className="mb-4" >Assurez vous la réussites à vos examens avec <span className="synoUnerline" >SyNo</span></h1>
                    <p className="mb-4" >Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo, exercitationem?</p>
                    <div className="d-inline" >
                        { <BasicButton text="Voir les cours" element="a" location="#" optionalClassname = "back-white mr" icons="ri-add-circle-fill" /> }
                        { <BasicButton text="Essayez" element="a" location="#" optionalClassname = "back-none" icons="ri-user-add-fill" /> }
                    </div>
                </div>
                <div>
                    
                </div>
            
        </section>
    )
}