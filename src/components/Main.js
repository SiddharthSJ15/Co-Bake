import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import Search from "./Search";
import Footer from "./Footer";
import Menus from "./Menus";
import Nav from "./navbar";
import "./img.css";

function Main() {
    
    useEffect(()=>{
        document.title='Co & Bake'
    })

    return (
        <>
        <div className="d-flex flex-column min-vh-100">            
            <Nav />
            <Routes>
                <Route path="/Co-Bake" element={<Home />} />
                <Route path="/search" element={<Search />} />
                <Route path="/menu" element={<Menus />} />
            </Routes>
        </div>
        <Footer />
        </>
    );
  }
  
export default Main;
  