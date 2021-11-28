import React from "react"
export default function Header(){
    return (
        <header >
            <div className="preheader">
                <div className="d-flex align-items-center container justify-content-between" >
                    <div className="icons">
                        <ul className = "nav d-flex align-items-center">
                            <li className="nav-item"><a className="nav-link" href=""> <i className="ri ri-facebook-fill"></i> </a></li>
                            <li className="nav-item"><a className="nav-link" href=""> <i className="ri ri-twitter-fill"></i> </a></li>
                            <li className="nav-item"><a className="nav-link" href=""> <i className="ri ri-instagram-fill"></i> </a></li>
                            <li className="nav-item"><a className="nav-link" href=""> <i className="ri ri-linkedin-fill"></i> </a></li>
                            <li>|</li>
                            <li className="nav-item  nav-link d-flex align-items-center"><i className="ri-mail-fill me-1"></i>  <span>syno@gmail.com</span></li>
                        </ul>
                    </div>
                    <div className="log">
                        <a href="" className="nav-link d-flex align-items-center"><i className="ri-user-fill me-1"></i><span> Login / Register</span></a>
                    </div>
                </div>
            </div>
            <nav className=" main_nav_SyNo d-flex flex-no-wrap align-items-center color-white justify-content-center bg-transparent flex-row no-wrap  justify-content-md-between py-3 container">
                <a href="" className="link-light d-flex align-items-center mb-2 mb-md-0 text-dark text-decoration-none">
                    <h2 className="Dancing-family" >SyNo</h2>
                </a>

                <ul className=" color-white nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
                    <li><a href="#" className="nav-link px-2 link-light">Home</a></li>
                    <li><a href="#" className="nav-link px-2 link-light">Features</a></li>
                    <li><a href="#" className="nav-link px-2 link-light">Pricing</a></li>
                    <li><a href="#" className="nav-link px-2 link-light">FAQs</a></li>
                    <li><a href="#" className="nav-link px-2 link-light">About</a></li>
                </ul>

                <form class="d-flex">
                    <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                    <button class="btn btn-success " type="submit">Search</button>
                </form>
            </nav>
        </header>
    )
}