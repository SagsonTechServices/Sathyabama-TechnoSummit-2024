import React from "react";
import AppButton from "../utils/AppButton.jsx";
import Heading2 from "../utils/Heading2.jsx";
import InfoText from "../utils/InfoText.jsx";

function PaymentSummary() {
    return (
        <div className="container mt-16 px-10 py-10 md:px-96">
            <div className="flex flex-col border border-primary px-5 py-5 text-center h-dull">
            <div>
                <Heading2 text={"Payment Summary"} />
                <div className="text-left pl-4 mb-5">
                <InfoText label={"Team Name:"} value={"Team Someone"}/>
                <InfoText label={"Team Leader's Email Address:"} value={"someone@example.com"} />
                <InfoText label={"Total No. of Team Members:"} value={"N"}/>
                <InfoText label={"Payment Status:"} value={"Success"}/>
                <InfoText label={"Amount paid:"} value={"N x (Base Amount)"}/>
                </div>
            </div>
            <div>
            <InfoText value={"Please check your email for Payment summary."}/>
            </div>
        </div>
        </div>
    )
}

export default PaymentSummary