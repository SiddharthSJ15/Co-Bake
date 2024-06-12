import React from "react";
import "./Home.css";
import homeImage from "../assets/home.jpeg"
import "./Search.css";
function Home() {
    return (
      <div className="container mt-5 pt-5">
        <div className="row mt-auto ">
          <div className="col text-white text-center ">

            <input placeholder="Start Typing...." class="input" name="text" type="text" />

            <p style={{ fontFamily: 'Poppins, sans-serif', fontWeight: "300", fontSize: "14.97px",color:"lightgray"}}>
              Press enter to begin your search
            </p>
          </div>
        </div>
      </div>
    );
  }
  
export default Home;
  




