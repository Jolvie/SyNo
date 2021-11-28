import React , {useState} from "react";


export default function CardCourses(props){
    const [animation , setAnimation] = useState(false)

    function strLimit(str , limit){
        if( str.length > limit ){
            return str.substr(0 , limit)+"..."
        }else{
            return str
        }
    }

    return(
        <div className="col d-flex align-items-start">
             <a href={props.link} className="card-link " 
            onMouseEnter = {()=> setAnimation(true)}  
            onMouseLeave={() => setAnimation(false)}
        >
            <span className={"hover1-"+animation}></span>
                <div className="card-courses feature col">
                    <div className="feature-icon bg-gradient d-flex align-items-center mb-2">
                    <img className="mb-2 mr" src={props.icon} width="70px" />
                    <h3 className="mb-3 pt-4">{props.title}</h3>
                    </div>
                    <p className="" >{strLimit(props.description , 100)}</p>
                    <div className="informations">
                        <ul className="nav d-flex justify-content-between" >
                            <li><i class="ri-line-height"></i> 10 Ressources</li>
                            <li><i class="ri-time-line"></i> 3h30</li>
                        </ul>
                    </div>
                    <svg width="80px" xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 80 79" color="#0EB582" className={"hover2-"+animation} src="https://demo.themewinter.com/wp/turitors/wp-content/themes/turitor/assets/images/dot_shape.svg" alt="shape image" data-ll-status="loaded"><title>dot_shape</title><path d="M68.78,0a1.63,1.63,0,1,0,1.63,1.62A1.63,1.63,0,0,0,68.78,0Zm9.6,3.25a1.63,1.63,0,1,0-1.63-1.63A1.63,1.63,0,0,0,78.38,3.25Zm-9.6,5.17A1.63,1.63,0,1,0,70.41,10,1.62,1.62,0,0,0,68.78,8.42Zm9.6,0A1.63,1.63,0,1,0,80,10,1.62,1.62,0,0,0,78.38,8.42Zm-9.6,8.41a1.63,1.63,0,1,0,1.63,1.63A1.63,1.63,0,0,0,68.78,16.83Zm9.6,0A1.63,1.63,0,1,0,80,18.46,1.63,1.63,0,0,0,78.38,16.83Zm-9.6,8.42a1.63,1.63,0,1,0,1.63,1.62A1.63,1.63,0,0,0,68.78,25.25Zm9.6,0A1.63,1.63,0,1,0,80,26.87,1.63,1.63,0,0,0,78.38,25.25Zm-9.6,8.42a1.63,1.63,0,1,0,1.63,1.62A1.62,1.62,0,0,0,68.78,33.67Zm9.6,0A1.63,1.63,0,1,0,80,35.29,1.62,1.62,0,0,0,78.38,33.67Zm-9.6,8.41a1.63,1.63,0,1,0,1.63,1.63A1.63,1.63,0,0,0,68.78,42.08Zm9.6,0A1.63,1.63,0,1,0,80,43.71,1.63,1.63,0,0,0,78.38,42.08Zm-9.6,8.42a1.63,1.63,0,1,0,1.63,1.62A1.63,1.63,0,0,0,68.78,50.5Zm9.6,0A1.63,1.63,0,1,0,80,52.12,1.63,1.63,0,0,0,78.38,50.5Zm-9.6,8.42a1.63,1.63,0,1,0,1.63,1.62A1.62,1.62,0,0,0,68.78,58.92Zm9.6,0A1.63,1.63,0,1,0,80,60.54,1.62,1.62,0,0,0,78.38,58.92ZM1.62,67.33A1.63,1.63,0,1,0,3.25,69,1.63,1.63,0,0,0,1.62,67.33Zm9.6,0A1.63,1.63,0,1,0,12.84,69,1.63,1.63,0,0,0,11.22,67.33Zm9.59,0A1.63,1.63,0,1,0,22.44,69,1.63,1.63,0,0,0,20.81,67.33Zm9.6,0A1.63,1.63,0,1,0,32,69,1.63,1.63,0,0,0,30.41,67.33Zm9.59,0A1.63,1.63,0,1,0,41.62,69,1.62,1.62,0,0,0,40,67.33Zm9.59,0A1.63,1.63,0,1,0,51.22,69,1.63,1.63,0,0,0,49.59,67.33Zm9.6,0a1.63,1.63,0,1,0,0,3.25,1.63,1.63,0,0,0,0-3.25Zm9.59,0A1.63,1.63,0,1,0,70.41,69,1.63,1.63,0,0,0,68.78,67.33Zm9.6,0A1.63,1.63,0,1,0,80,69,1.63,1.63,0,0,0,78.38,67.33ZM1.62,75.75a1.63,1.63,0,1,0,1.63,1.62A1.63,1.63,0,0,0,1.62,75.75Zm9.6,0a1.63,1.63,0,1,0,1.62,1.62A1.63,1.63,0,0,0,11.22,75.75Zm9.59,0a1.63,1.63,0,1,0,1.63,1.62A1.63,1.63,0,0,0,20.81,75.75Zm9.6,0A1.63,1.63,0,1,0,32,77.37,1.63,1.63,0,0,0,30.41,75.75Zm9.59,0a1.63,1.63,0,1,0,1.62,1.62A1.62,1.62,0,0,0,40,75.75Zm9.59,0a1.63,1.63,0,1,0,1.63,1.62A1.63,1.63,0,0,0,49.59,75.75Zm9.6,0a1.63,1.63,0,1,0,1.62,1.62A1.63,1.63,0,0,0,59.19,75.75Zm9.59,0a1.63,1.63,0,1,0,1.63,1.62A1.63,1.63,0,0,0,68.78,75.75Zm9.6,0A1.63,1.63,0,1,0,80,77.37,1.63,1.63,0,0,0,78.38,75.75Z"></path></svg>
                </div>
        </a>
        </div>
    )
}