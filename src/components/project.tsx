import React from "react";
import "./about.css";

export default function Project() {
  return (
    <div
      style={{
        backgroundColor: "#e7e7e7",
        marginTop: "0",
        height: "90vh",
        fontFamily: "public-sans",
      }}
    >
      <div className="d-flex flex-row">
        <div className="container text-center">
          <div className="row row-cols-2">
            <div className="col">
                <p>DigsFact</p>

            </div>
            <div className="col">Column</div>
            <div className="col">Column</div>
            <div className="col">Column</div>
          </div>
        </div>
      </div>
    </div>
  );
}
