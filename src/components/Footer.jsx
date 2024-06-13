import { Link } from "react-router-dom";
import "./placeholde.css"
function Footer() {
    return (
        <footer className="bg-dark mt-auto">
            <div className="container ">
                <div className="row gx-5">

                        <div class="col-auto  mt-2 py-3 ">
                            <a href="/" class="d-flex align-items-center mb-3 link-dark text-decoration-none">
                            <Link class="navbar-brand text-light text-center text-wrap " to="/">
                                <div className="row">
                                    <h2 style={{ fontFamily: 'Poppins, sans-serif', fontWeight:"250", fontSize:"48.5801px" }}>THE CO & BAKE</h2>
                                </div>
                                <div className="row">
                                    <h2  style={{ fontFamily: 'Poppins, sans-serif', fontWeight:"250", fontSize:"24.4508px"}}>CHOOSE KOZHIKODE</h2>
                                </div>
                            </Link>
                            </a>
                        </div>
                        
                        <div class="col-auto mt-5 ms-5" style={{textAlign:"left"}}>
                            <ul className="nav flex-column">
                                <li class="nav-item mb-2"><Link to="/" class="nav-link p-0 text-light">HOME</Link></li>
                                <li class="nav-item mb-2"><Link to="/menu" class="nav-link p-0 text-light">MENUS</Link></li>
                            </ul>
                        </div>

                            <div class="col-auto ms-5 mt-5" style={{textAlign:"left"}}>
                            <ul class="nav flex-column">
                                <li class="nav-item mb-2"><Link to="/search" class="nav-link p-0 text-light">SEARCH</Link></li>
                                <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-light">ABOUT</a></li>
                            </ul>
                        </div>

                        <div class="col-auto mt-5 ms-5" style={{textAlign:"left"}}>
                            <ul class="nav flex-column">
                                <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-light">PASTRY</a></li>
                                <li class="nav-item mb-3"><a href="#" class="nav-link p-0 text-light">PRIVACY POLICY</a></li>
                            </ul>
                        </div>

                        <div class="col-auto mt-4 ms-5" style={{textAlign:"left"}}>
                            <ul class="nav flex-column">
                                <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-light">CONTACT</a></li>
                                <div class="input-group mb-3 text-white">
                                    <input type="text" className="form-control bg-dark text-white border-end-0" placeholder="www.abcd@gmail.com" aria-label="Recipient's username" aria-describedby="button-addon2" />
                                    <button class="btn btn-outline-dark border-top border-bottom border-end" type="button" id="button-addon2"><i class="bi bi-arrow-right-circle text-white"></i></button>
                                </div>
                            </ul>
                        </div>
                        
                </div>
            </div>
        </footer>
    );
  }
  
  export default Footer;


//   <footer class="row row-cols-5 py-5 my-5 -top">
    
//   </footer>



    