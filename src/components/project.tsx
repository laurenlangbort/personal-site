import React from "react";
import "./project.css";
import diagram from "../assets/picsForSite/erdiagram.png";
import digs from "../assets/picsForSite/digsfact.png";
import ft from "../assets/picsForSite/fruitytreasures.png";
import um from "../assets/picsForSite/UM.png";
import turt from "../assets/turtles.png";

export default function Project() {
  return (
    <div
      id="project"
      className="pb-5"
      style={{
        backgroundColor: "#e7e7e7",
        marginTop: "0",
        fontFamily: "public-sans",
      }}
    >
      <div>
        <p
          className="ps-3 fw-semibold"
          style={{ fontSize: "30px", color: "#340545", paddingTop: "10vh" }}
        >
          Some of My Projects
        </p>
      </div>
      <div className="pt-5">
        <img src={turt} alt="" className="turtle-back" />
        <div className="container text-center">
          <div className="row row-cols-1 row-cols-md-2">
            <div className="col mx-auto d-block">
              <a
                target="_blank"
                rel="noopener noreferrer"
                className="align-items-center"
                href="https://digsfact.com/"
              >
                <img
                  src={digs}
                  alt=""
                  className="shadow-lg circle-img"
                  width="400"
                  height="250"
                />
              </a>
              <p className="pt-3 fw-semibold font-size-20">DigsFact Website</p>
              <p className="position-relative z-2 fw-medium">
                I developed the user interface for DigsFact's website redesign
                using Angular, HTML, CSS, and JavaScript. Collaborating closely
                with a UX designer, I translated Figma designs into a fully
                responsive site, ensuring an optimal user experience on both
                desktop and mobile devices.
              </p>
            </div>
            <div className="col mx-auto d-block"> 
            <a
                target="_blank"
                rel="noopener noreferrer"
                className="align-items-center"
                href="https://github.com/laurenlangbort/MadridMetroSystem"
              >
              <img
                src={diagram}
                alt=""
                className="shadow-lg circle-img"
                width="400"
                height="250"
              /> 
              </a>
              <p className="pt-3 fw-semibold font-size-20">
                Madrid Metro System
              </p>
              <p className="position-relative z-2 fw-medium">
                I created and managed a SQL database for a metro card service,
                handling client registration, card recharging, and usage
                tracking. Implemented triggers to automatically update card
                prices based on factors like age and location, ensuring seamless
                management of discounts and client data.
              </p>
            </div>
            <div className="col mx-auto d-block mt-0 mt-md-3">
              <img
                src={ft}
                alt=""
                className="shadow-lg circle-img"
                width="400"
                height="250"
              />
              <p className="pt-3 fw-semibold font-size-20">Fruity Treasures</p>
            </div>
            <div className="col mx-auto d-block mt-0 mt-md-3">
              {" "}
              <img
                src={um}
                alt=""
                className="shadow-lg circle-img"
                width="400"
                height="250"
              />
              <p className="pt-3 fw-semibold font-size-20">Universal Machine</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
