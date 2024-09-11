import React from "react";
import "./interests.css";

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
      <div className="d-flex flex-row">
        <div className="container text-center">
          <div className="row row-cols-3">
            <div className="col">
                <p>Writing</p>

            </div>
            <div className="col">
                <p>Drawing</p>
            </div>
            <div className="col">
                <p>Yoga</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
