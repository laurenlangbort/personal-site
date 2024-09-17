import React from "react";
import "./about.css";

export default function Project() {
  return (
    <div 
      id="project"
      style={{
        backgroundColor: "#e7e7e7",
        marginTop: "0",
        height: "90vh",
        fontFamily: "public-sans",
      }}
    > 
    <div> 
      <p className="ps-3 fw-semibold" style={{fontSize: "30px", color: "#340545"}}>Some of My Projects</p>
    </div>
      <div className="d-flex flex-row"> 
        <div className="container text-center"> 
          <div className="row row-cols-2">
            <div className="col">
                <p>DigsFact Website</p>

            </div>
            <div className="col">
              <p>Madrid Metro</p>
              </div>
            <div className="col">Column</div>
            <div className="col">Column</div>
          </div>
        </div>
      </div>
    </div>
  );
}
