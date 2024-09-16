import React from "react";
import Heading1 from "../utils/Heading1";
import Heading0 from "../utils/Heading0";

function Sathyabama() {
    return (
        <div>
            <div className="md:hero mt-20 pb-5 bg-black hidden">
                <div className="hero-content text-center">
                    <div className="w-full">
                        <Heading0 text={"SATHYABAMA"}></Heading0>
                        <Heading1 text={"INSTITUE OF SCIENCE AND TECHNOLOGY"} className={'text-2xl text-white'}></Heading1>
                        <Heading1 text={"(DEEMED TO BE UNIVERSITY)"} className={'text-lg text-white'}></Heading1>
                        <Heading1 text={"CATEGORY-1 UNIVERSITY BY UGC"} className={'text-xl text-white'}></Heading1>
                        <Heading1 text={"Accredited with Grade \"A++\" by NAAC | Approved by AICTE "} className={'text-xl text-white'}></Heading1>
                    </div>
                </div>
            </div>

            <div className="hero mt-20 bg-black md:hidden">
                <div className="hero-content text-center">
                    <div className="w-full">
                        <Heading1 text={"SATHYABAMA"} className={"text-2xl text-white"}></Heading1>
                        <Heading1 text={"INSTITUE OF SCIENCE AND TECHNOLOGY"} className={'text-xs text-white'}></Heading1>
                        <Heading1 text={"(DEEMED TO BE UNIVERSITY)"} className={'text-[10px] text-white'}></Heading1>
                        <Heading1 text={"CATEGORY-1 UNIVERSITY BY UGC"} className={'text-xs text-white'}></Heading1>
                        <Heading1 text={"Accredited with Grade \"A++\" by NAAC | Approved by AICTE "} className={'text-xs text-white'}></Heading1>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sathyabama