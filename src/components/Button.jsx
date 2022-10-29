import React from 'react'

function Button({ children, bgColor, padding }) {

    return (
        <div>
            <button className={`text-3xl text-black font-semibold rounded-xl  hover:bg-emerald-700 ${bgColor} ${padding}`}>{children}</button>
        </div>
    )

}

export default Button







Button.defaultProps = {
    bgColor: "bg-slate-50",
    padding: "p-3"

}