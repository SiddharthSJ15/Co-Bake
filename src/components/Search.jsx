import React from "react";
import "./Home.css";
import homeImage from "../assets/home.jpeg"
function Home() {
    return (
      <div className="container mt-5 pt-5">
        <div className="row mt-auto ">
          <div className="col text-white text-center ">
            <p style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: "300", fontSize: "56.51px"}}>
              Start Typing...
            </p>
            <p style={{ fontFamily: 'Poppins, sans-serif', fontWeight: "300", fontSize: "14.97px"}}>
              Press enter to begin your search
            </p>
          </div>
        </div>
      </div>
    );
  }
  
export default Home;
  




