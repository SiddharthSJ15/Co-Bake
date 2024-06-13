import React from "react";
import { Link } from "react-router-dom";
import firstImage from "../assets/cake1.png";
function Search() {
    return (

    <div className="bg-dark">
        <div className="container">
            <div class="d-flex flex-row col-sm-6 col-md-6 align-items-start" style={{fontFamily:"Poppins"}}>
{/* FIRST SECTION */} 
                <div className="col col-sm-10 mt-5" style={{ height: "70vh", overflowY: "auto", scrollbarWidth: "none",msOverflowStyle: "none",WebkitOverflowScrolling: "touch","&::-webkit-scrollbar": {display: "none"}}}>
                    <div className="row mt-5">           
                        <div class="col col-sm-6 col-md-6 text-white" >
                            <div className="card bg-dark border-0" >
                                <img src={firstImage} class="img-thumbnail" alt="..." />
                            </div>
                        </div>
                        
                        <div class="col col-sm-6 col-md-6">
                            <table class="table border-0">
                                
                                <thead className="border-0 ">
                                    <tr>
                                        <th scope="col" colspan="2" className="text-center rounded-top">THIS IS HEADING</th>
                                    </tr>
                                </thead>
                                <tbody className="text-center rounded-top">
                                    <tr className="">
                                        <td className="border border-5 border-start-0 border-bottom-0 border-dark rounded-top">750 gm</td>
                                        <td className="border border-5 border-end-0 border-bottom-0 border-dark rounded-top"><span>&#8377;</span> 1570</td>
                                    </tr>
                                    <tr>
                                        <td className="border border-5 border-start-0 border-top-0 border-bottom-0 border-dark">Hot Cake</td>
                                        <td className="border-end-0 border-bottom-0"><span>&#8377;</span> 895</td>
                                    </tr>
                                    <tr>
                                        <td className="border border-5 border-start-0 rounded-bottom border-top-0 border-bottom-0 border-dark ">Slice</td>
                                        <td className="border-end-0 border-bottom-0 rounded-bottom"><span>&#8377;</span> 245</td>
                                    </tr>
                                </tbody>

                            </table>
                        </div>
                        <span className="text-light" style={{ display: 'flex', justifyContent: 'flex-end' }}>
                            More &nbsp; <i class="bi bi-arrow-right-circle"></i>                        
                        </span>
                        <hr className="text-light"/>
                        
                    </div>

                    <div className="row">           
                        <div class="col col-sm-6 col-md-6 text-white">
                            <div className="card bg-dark border-0" >
                                <img src={firstImage} class="img-thumbnail" alt="..." />
                            </div>
                        </div>
                        
                        <div class="col col-sm-6 col-md-6">
                            <table class="table border-0">
                                
                                <thead className="border-0 ">
                                    <tr>
                                        <th scope="col" colspan="2" className="text-center rounded-top">THIS IS HEADING</th>
                                    </tr>
                                </thead>
                                <tbody className="text-center rounded-top">
                                    <tr className="">
                                        <td className="border border-5 border-start-0 border-bottom-0 border-dark rounded-top">750 gm</td>
                                        <td className="border border-5 border-end-0 border-bottom-0 border-dark rounded-top"><span>&#8377;</span> 1570</td>
                                    </tr>
                                    <tr>
                                        <td className="border border-5 border-start-0 border-top-0 border-bottom-0 border-dark">Hot Cake</td>
                                        <td className="border-end-0 border-bottom-0"><span>&#8377;</span> 895</td>
                                    </tr>
                                    <tr>
                                        <td className="border border-5 border-start-0 rounded-bottom border-top-0 border-bottom-0 border-dark ">Slice</td>
                                        <td className="border-end-0 border-bottom-0 rounded-bottom"><span>&#8377;</span> 245</td>
                                    </tr>
                                </tbody>

                            </table>
                        </div>      
                        <span className="text-light" style={{ display: 'flex', justifyContent: 'flex-end' }}>
                            More &nbsp; <i class="bi bi-arrow-right-circle"></i>                        
                        </span>
                        <hr className="text-light"/>        
                    </div>
                    
                    <div className="row">           
                        <div class="col col-sm-6 col-md-6 text-white">
                            <div className="card bg-dark border-0" >
                                <img src={firstImage} class="img-thumbnail" alt="..." />
                            </div>
                        </div>
                        
                        <div class="col col-sm-6 col-md-6">
                            <table class="table border-0">
                                
                                <thead className="border-0 ">
                                    <tr>
                                        <th scope="col" colspan="2" className="text-center rounded-top">THIS IS HEADING</th>
                                    </tr>
                                </thead>
                                <tbody className="text-center rounded-top">
                                    <tr className="">
                                        <td className="border border-5 border-start-0 border-bottom-0 border-dark rounded-top">750 gm</td>
                                        <td className="border border-5 border-end-0 border-bottom-0 border-dark rounded-top"><span>&#8377;</span> 1570</td>
                                    </tr>
                                    <tr>
                                        <td className="border border-5 border-start-0 border-top-0 border-bottom-0 border-dark">Hot Cake</td>
                                        <td className="border-end-0 border-bottom-0"><span>&#8377;</span> 895</td>
                                    </tr>
                                    <tr>
                                        <td className="border border-5 border-start-0 rounded-bottom border-top-0 border-bottom-0 border-dark ">Slice</td>
                                        <td className="border-end-0 border-bottom-0 rounded-bottom"><span>&#8377;</span> 245</td>
                                    </tr>
                                </tbody>

                            </table>
                        </div> 
                        <span className="text-light" style={{ display: 'flex', justifyContent: 'flex-end' }}>
                            More &nbsp; <i class="bi bi-arrow-right-circle"></i>                        
                        </span>
                        <hr className="text-light"/>             
                    </div>

                </div>
{/* FIRST SECTION END */}
{/* MIDDLE SECTION */}
                <div class="col col-sm-7 col-md-7 mt-5 text-white" style={{ height: "70vh", overflowY: "auto", scrollbarWidth: "none",msOverflowStyle: "none",WebkitOverflowScrolling: "touch","&::-webkit-scrollbar": {display: "none"}}}> 
                    
                    <div className="flex-wrap">   
                        <div className="row mt-5 mb-4 mx-4">
                            <div class="col text-white">
                                <div className="card">
                                        <img src={firstImage} class="img-thumbnail" alt="..." />
                                </div>
                            </div>
                        </div>

                        <div className="row mx-4">
                            <div class="col text-white">
                            {/* <div class="col col-sm-6 col-md-6"> */}
                            <table class="table border-0">
                                
                                <thead className="border-0 ">
                                    <tr>
                                        <th scope="col" colspan="2" className="text-center rounded-top">THIS IS HEADING</th>
                                    </tr>
                                </thead>
                                <tbody className="text-center rounded-top">
                                    <tr className="">
                                        <td className="border border-5 border-start-0 border-bottom-0 border-dark rounded-top">750 gm</td>
                                        <td className="border border-5 border-end-0 border-bottom-0 border-dark rounded-top"><span>&#8377;</span> 1570</td>
                                    </tr>
                                    <tr>
                                        <td className="border border-5 border-start-0 border-top-0 border-bottom-0 border-dark">Hot Cake</td>
                                        <td className="border-end-0 border-bottom-0"><span>&#8377;</span> 895</td>
                                    </tr>
                                    <tr>
                                        <td className="border border-5 border-start-0 rounded-bottom border-top-0 border-bottom-0 border-dark ">Slice</td>
                                        <td className="border-end-0 border-bottom-0 rounded-bottom"><span>&#8377;</span> 245</td>
                                    </tr>
                                </tbody>

                            </table>
                        {/* </div> */}
                            </div>
                            <span className="text-light" style={{ display: 'flex', justifyContent: 'flex-end' }}>
                            More &nbsp; <i class="bi bi-arrow-right-circle"></i>                        
                        </span> 
                        </div>  
  
                    </div>

                    <div className="flex-wrap">   
                        <div className="row mt-3 mb-4 mx-4">
                            <div class="col text-white">
                                <div className="card">
                                        <img src={firstImage} class="img-thumbnail" alt="..." />
                                </div>
                            </div>
                        </div>

                        <div className="row mx-4">
                            <div class="col text-white">
                            {/* <div class="col col-sm-6 col-md-6"> */}
                            <table class="table border-0">
                                
                                <thead className="border-0 ">
                                    <tr>
                                        <th scope="col" colspan="2" className="text-center rounded-top">THIS IS HEADING</th>
                                    </tr>
                                </thead>
                                <tbody className="text-center rounded-top">
                                    <tr className="">
                                        <td className="border border-5 border-start-0 border-bottom-0 border-dark rounded-top">750 gm</td>
                                        <td className="border border-5 border-end-0 border-bottom-0 border-dark rounded-top"><span>&#8377;</span> 1570</td>
                                    </tr>
                                    <tr>
                                        <td className="border border-5 border-start-0 border-top-0 border-bottom-0 border-dark">Hot Cake</td>
                                        <td className="border-end-0 border-bottom-0"><span>&#8377;</span> 895</td>
                                    </tr>
                                    <tr>
                                        <td className="border border-5 border-start-0 rounded-bottom border-top-0 border-bottom-0 border-dark ">Slice</td>
                                        <td className="border-end-0 border-bottom-0 rounded-bottom"><span>&#8377;</span> 245</td>
                                    </tr>
                                </tbody>

                            </table>
                        {/* </div> */}
                            </div>
                            <span className="text-light" style={{ display: 'flex', justifyContent: 'flex-end' }}>
                            More &nbsp; <i class="bi bi-arrow-right-circle"></i>                        
                        </span> 
                        </div>  
  
                    </div>

                    <div className="flex-wrap">   
                        <div className="row mt-3 mb-4 mx-4">
                            <div class="col text-white">
                                <div className="card">
                                        <img src={firstImage} class="img-thumbnail" alt="..." />
                                </div>
                            </div>
                        </div>

                        <div className="row mx-4">
                            <div class="col text-white">
                            {/* <div class="col col-sm-6 col-md-6"> */}
                            <table class="table border-0">
                                
                                <thead className="border-0 ">
                                    <tr>
                                        <th scope="col" colspan="2" className="text-center rounded-top">THIS IS HEADING</th>
                                    </tr>
                                </thead>
                                <tbody className="text-center rounded-top">
                                    <tr className="">
                                        <td className="border border-5 border-start-0 border-bottom-0 border-dark rounded-top">750 gm</td>
                                        <td className="border border-5 border-end-0 border-bottom-0 border-dark rounded-top"><span>&#8377;</span> 1570</td>
                                    </tr>
                                    <tr>
                                        <td className="border border-5 border-start-0 border-top-0 border-bottom-0 border-dark">Hot Cake</td>
                                        <td className="border-end-0 border-bottom-0"><span>&#8377;</span> 895</td>
                                    </tr>
                                    <tr>
                                        <td className="border border-5 border-start-0 rounded-bottom border-top-0 border-bottom-0 border-dark ">Slice</td>
                                        <td className="border-end-0 border-bottom-0 rounded-bottom"><span>&#8377;</span> 245</td>
                                    </tr>
                                </tbody>

                            </table>
                        {/* </div> */}
                            </div>
                            <span className="text-light" style={{ display: 'flex', justifyContent: 'flex-end' }}>
                            More &nbsp; <i class="bi bi-arrow-right-circle"></i>                        
                        </span>   
                        </div>  

                    </div>

                </div>
{/* MIDDLE SECTION END */}

{/* LAST SECTION */}
<div class="col col-sm-7 col-md-7 mt-5 text-white" style={{ height: "70vh", overflowY: "auto", scrollbarWidth: "none",msOverflowStyle: "none",WebkitOverflowScrolling: "touch","&::-webkit-scrollbar": {display: "none"}}}> 
<div className="flex-wrap">   
                        <div className="row mt-5 mb-4 mx-4">
                            <div class="col text-white">
                                <div className="card">
                                        <img src={firstImage} class="img-thumbnail" alt="..." />
                                </div>
                            </div>
                        </div>

                        <div className="row mx-4">
                            <div class="col text-white">
                            {/* <div class="col col-sm-6 col-md-6"> */}
                            <table class="table border-0">
                                
                                <thead className="border-0 ">
                                    <tr>
                                        <th scope="col" colspan="2" className="text-center rounded-top">THIS IS HEADING</th>
                                    </tr>
                                </thead>
                                <tbody className="text-center rounded-top">
                                    <tr className="">
                                        <td className="border border-5 border-start-0 border-bottom-0 border-dark rounded-top">750 gm</td>
                                        <td className="border border-5 border-end-0 border-bottom-0 border-dark rounded-top"><span>&#8377;</span> 1570</td>
                                    </tr>
                                    <tr>
                                        <td className="border border-5 border-start-0 border-top-0 border-bottom-0 border-dark">Hot Cake</td>
                                        <td className="border-end-0 border-bottom-0"><span>&#8377;</span> 895</td>
                                    </tr>
                                    <tr>
                                        <td className="border border-5 border-start-0 rounded-bottom border-top-0 border-bottom-0 border-dark ">Slice</td>
                                        <td className="border-end-0 border-bottom-0 rounded-bottom"><span>&#8377;</span> 245</td>
                                    </tr>
                                </tbody>

                            </table>
                        {/* </div> */}
                            </div>
                            <span className="text-light" style={{ display: 'flex', justifyContent: 'flex-end' }}>
                            More &nbsp; <i class="bi bi-arrow-right-circle"></i>                        
                        </span>  
                        </div>  
 
                    </div>

                    <div className="flex-wrap">   
                        <div className="row mt-3 mb-4 mx-4">
                            <div class="col text-white">
                                <div className="card">
                                        <img src={firstImage} class="img-thumbnail" alt="..." />
                                </div>
                            </div>
                        </div>

                        <div className="row mx-4">
                            <div class="col text-white">
                            {/* <div class="col col-sm-6 col-md-6"> */}
                            <table class="table border-0">
                                
                                <thead className="border-0 ">
                                    <tr>
                                        <th scope="col" colspan="2" className="text-center rounded-top">THIS IS HEADING</th>
                                    </tr>
                                </thead>
                                <tbody className="text-center rounded-top">
                                    <tr className="">
                                        <td className="border border-5 border-start-0 border-bottom-0 border-dark rounded-top">750 gm</td>
                                        <td className="border border-5 border-end-0 border-bottom-0 border-dark rounded-top"><span>&#8377;</span> 1570</td>
                                    </tr>
                                    <tr>
                                        <td className="border border-5 border-start-0 border-top-0 border-bottom-0 border-dark">Hot Cake</td>
                                        <td className="border-end-0 border-bottom-0"><span>&#8377;</span> 895</td>
                                    </tr>
                                    <tr>
                                        <td className="border border-5 border-start-0 rounded-bottom border-top-0 border-bottom-0 border-dark ">Slice</td>
                                        <td className="border-end-0 border-bottom-0 rounded-bottom"><span>&#8377;</span> 245</td>
                                    </tr>
                                </tbody>

                            </table>
                        {/* </div> */}
                            </div>
                            <span className="text-light" style={{ display: 'flex', justifyContent: 'flex-end' }}>
                            More &nbsp; <i class="bi bi-arrow-right-circle"></i>                        
                        </span>  
                        </div>  
 
                    </div>

                    <div className="flex-wrap">   
                        <div className="row mt-3 mb-4 mx-4">
                            <div class="col text-white">
                                <div className="card">
                                        <img src={firstImage} class="img-thumbnail" alt="..." />
                                </div>
                            </div>
                        </div>

                        <div className="row mx-4">
                            <div class="col text-white">
                            {/* <div class="col col-sm-6 col-md-6"> */}
                            <table class="table border-0">
                                
                                <thead className="border-0 ">
                                    <tr>
                                        <th scope="col" colspan="2" className="text-center rounded-top">THIS IS HEADING</th>
                                    </tr>
                                </thead>
                                <tbody className="text-center rounded-top">
                                    <tr className="">
                                        <td className="border border-5 border-start-0 border-bottom-0 border-dark rounded-top">750 gm</td>
                                        <td className="border border-5 border-end-0 border-bottom-0 border-dark rounded-top"><span>&#8377;</span> 1570</td>
                                    </tr>
                                    <tr>
                                        <td className="border border-5 border-start-0 border-top-0 border-bottom-0 border-dark">Hot Cake</td>
                                        <td className="border-end-0 border-bottom-0"><span>&#8377;</span> 895</td>
                                    </tr>
                                    <tr>
                                        <td className="border border-5 border-start-0 rounded-bottom border-top-0 border-bottom-0 border-dark ">Slice</td>
                                        <td className="border-end-0 border-bottom-0 rounded-bottom"><span>&#8377;</span> 245</td>
                                    </tr>
                                </tbody>

                            </table>
                        {/* </div> */}
                            </div>
                            <span className="text-light" style={{ display: 'flex', justifyContent: 'flex-end' }}>
                            More &nbsp; <i class="bi bi-arrow-right-circle"></i>                        
                        </span>   
                        </div>  
                        
                    </div>

                </div>
            
{/* LAST SECTION END */}
            </div>
        </div>
    </div>
    );
  }
  
export default Search;
  

