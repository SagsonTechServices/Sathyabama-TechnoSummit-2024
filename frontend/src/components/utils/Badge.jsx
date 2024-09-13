import React from "react"

function Badge({text, className=""}) {
    return(
        <div className="w-full flex grow primary-shadow">
            <span className={`flex grow items-center justify-center badge outline-none badge-lg badge-primary badge-outline rounded-md w-full max-w-xs text-center ${className}`}>{text}</span>
        </div>
    )
}

export default Badge