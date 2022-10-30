import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Bar({ barWidth, barColor }) {








    return (
        <div className="my-5 w-full  flex justify-start bg-gray-600 ">
            <div id='bar' className={`  ${barWidth}   ${barColor}    h-full  text-center `}>

                <div className="inline-block"></div></div>
        </div>
    )
}

export default Bar