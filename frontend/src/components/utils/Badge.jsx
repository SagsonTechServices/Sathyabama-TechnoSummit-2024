import React from "react"

function Badge({text, className=""}) {
    return(
        <div className="w-full flex grow">
            <span className={`flex grow items-center justify-center badge badge-lg badge-primary badge-outline rounded-none w-full max-w-xs text-center ${className}`}>{text}</span>
        </div>
    )
}

export default Badge