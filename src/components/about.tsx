import React from "react";
import "./about.css";

export default function About() {
  return (
    <div className="overflow-y-hidden" style={{ backgroundColor: "#e7e7e7", marginTop: "0", height: "90vh", fontFamily: "public-sans" }}> 
    <div className="text-center position-relative" style={{width: "50vw", left: "40vw", top: "100px"}}>
      <p className="pt-5 fw-bold" style={{fontSize: "30px", color: "#340545"}}> Hi! I'm Lauren... ;)</p>
      <p>
        I'm a senior at Tufts University, majoring in Computer Science and
        Cognitive Brain Science. I've always been fascinated by how our unique
        experiences and perceptions influence the way we interact with the
        world, and I’m passionate about using technology to create solutions
        that cater to people's diverse needs. By combining my technical skills
        with creativity and understanding of human experiences, I love finding 
        innovative ways to bring ideas to life.
      </p>
    </div> 
    </div>
  );
}
