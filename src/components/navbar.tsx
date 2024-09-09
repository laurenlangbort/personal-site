import React from "react";
import "./navbar.css";

export default function Navbar() {
  return (
    <nav className="nav navbar navbar-expand-lg ">
      <a
        href="/"
        className="float-start fw-semibold ps-4  Name-Right"
        style={{
          color: "#27325c",
          fontFamily: "public-sans",
          textDecoration: "none",
        }}
      >
        Lauren Langbort
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarTogglerDemo02"
        aria-controls="navbarTogglerDemo02"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div
        className="collapse navbar-collapse float-end position-relative"
        id="navbarTogglerDemo02" 
        style={{ right: "0px"}}
      >
        <ul className="list d-flex flex-row float-end">
          <li className="px-3" style={{ textDecoration: "none" }}>
            <a href="/about">About</a>
          </li>
          <li className="px-3" style={{ textDecoration: "none" }}>
            <a href="/projects">Projects</a>
          </li>
          <li className="px-3" style={{ textDecoration: "none" }}>
            <a href="/interests">Interests</a>
          </li>
          <li className="px-3" style={{ textDecoration: "none" }}>
            <a href="/contact">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
