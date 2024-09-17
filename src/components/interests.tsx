import React from "react";
import "./interests.css"; 
import yoga from '../assets/Yoga.png'; 
import drawing from '../assets/Drawing.png'; 
import writing from '../assets/Writing.png';


export default function Interest() {
  return (
    <div
      style={{
        backgroundColor: "#e7e7e7",
        marginTop: "0",
        height: "90vh",
        fontFamily: "public-sans",
      }}
    > 
    <div> 
        <p className="ps-3 fw-semibold" style={{fontSize: "30px", color: "#340545"}}>If I'm not coding, I'm ... </p>
    </div>
      <div className="d-flex flex-row">
        <div className="container text-center">
          <div className="row row-cols-4">
            <div className="col d-flex flex-row">
                <p className="align-self-center l-space-extra">Writing</p> 
                <img src={writing} alt="" width="100" className="ps-2 align-self-center"/>

            </div>
            <div className="col d-flex flex-row">
            <p className="align-self-center l-space-extra">Drawing</p> 
                <img src={drawing} alt="" width="100" className="ps-2 align-items-center"/>
            </div>
            <div className="col d-flex flex-row">
            <p className="align-self-center l-space-extra">Yoga</p> 
                <img src={yoga} alt="" width="100" className="ps-2 align-items-center"/>
            </div> 
            <div className="col d-flex flex-row">
            <p className="align-self-center l-space-extra">Yoga</p> 
                <img src={yoga} alt="" width="100" className="ps-2 align-items-center"/>
            </div>
          </div>
        </div>
      </div> 
      <div> 
        <p>Read My Writings On The Tufts Observer</p>
      </div>
    </div>
  );
}
