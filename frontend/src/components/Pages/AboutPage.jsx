import React from "react";
import Heading2 from "../utils/Heading2";

function AboutPage() {
    return (
        <div className="px-10 py-20">
            <div className="hero min-h-44">
                <img src='./src/assets/logo.jpeg'></img>
            </div>
            <div>
                <Heading2 text={"About TechnoSummit"}></Heading2>
                <p className="text-justify md:text-lg">
                    Technosummit 2024 an opportunity for the students to immerse themselves in the future of technology. This edition of technosummit 2024 promises an exhilarating journey in to the world of technology and innovation.The fest would pull out all the stops to bring a dynamic, engaging, and intellectually stimulating experience that the students don’t want to miss. The yearly extravagance is scheduled to be conducted on the 15th and 16th of September 2024.
                </p>
            </div>
        </div>
    )
}

export default AboutPage