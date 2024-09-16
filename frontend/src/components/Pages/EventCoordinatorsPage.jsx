import React from "react";
import SummaryContainer from "../app/SummaryContainer";
import Heading1 from "../utils/Heading1";
import Heading3 from "../utils/Heading3";

function EventCoordinators() {
    return (
        <div className="container justify-center my-20 px-10 md:px-40">
            <div className="text-center pb-10">
                <Heading3 text={"EventName Registrations"} className={"md:text-3xl font-normal"}></Heading3>
            </div>
            <SummaryContainer></SummaryContainer>
        </div>
    )
}

export default EventCoordinators