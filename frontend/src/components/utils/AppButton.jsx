import React from "react";

function AppButton({btnText, className, link}) {
    return(
        <div>
            <a href={link}><button className={`btn w-52 md:btn-wide btn-primary ${className}`}>{btnText}</button></a>
        </div>
    )
}

export default AppButton