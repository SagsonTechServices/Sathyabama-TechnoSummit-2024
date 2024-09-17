import React from "react";
import Heading1 from "../utils/Heading1";
import Heading0 from "../utils/Heading0";

function Sathyabama() {
    return (
        <div>
            <div className="md:hero mt-20 pb-5 bg-black hidden">
                <div className="hero-content text-center flex justify-between items-center w-full">
                    <div>
                        <img src="./src/assets/sistlogo.png" className="w-[200px] h-auto" />
                    </div>
                    <div className="w-full">
                        <Heading0 text={"SATHYABAMA"}></Heading0>
                        <Heading1 text={"INSTITUE OF SCIENCE AND TECHNOLOGY"} className={'text-2xl text-white'}></Heading1>
                        <Heading1 text={"(DEEMED TO BE UNIVERSITY)"} className={'text-lg text-white'}></Heading1>
                        <Heading1 text={"CATEGORY-1 UNIVERSITY BY UGC"} className={'text-xl text-white'}></Heading1>
                        <Heading1 text={"Accredited with Grade \"A++\" by NAAC | Approved by AICTE "} className={'text-xl text-white'}></Heading1>
                    </div>
                    <div>
                        <img src="./src/assets/a++.jpg" />
                    </div>
                </div>
            </div>

            <div className="hero mt-20 bg-black md:hidden">
                <div className="hero-content text-center">
                    <div>
                        <img src="./src/assets/sistlogo.png" className="w-[80px] h-auto"/>
                    </div>
                    <div className="w-full">
                        <Heading1 text={"SATHYABAMA"} className={"text-2xl text-white"}></Heading1>
                        <Heading1 text={"INSTITUE OF SCIENCE AND TECHNOLOGY"} className={'text-[10px] text-white'}></Heading1>
                        <Heading1 text={"(DEEMED TO BE UNIVERSITY)"} className={'text-[8px] text-white'}></Heading1>
                        <Heading1 text={"CATEGORY-1 UNIVERSITY BY UGC"} className={'text-[10px] text-white'}></Heading1>
                        <Heading1 text={"Accredited with Grade \"A++\" by NAAC | Approved by AICTE "} className={'text-[10px] text-white'}></Heading1>
                    </div>
                    <div>
                        <img src="./src/assets/a++.jpg" className="w-[100px] h-auto" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sathyabama