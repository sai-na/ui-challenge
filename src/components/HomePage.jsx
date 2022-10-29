import React, { useState } from 'react'
import { Link } from "react-router-dom"
import Button from './Button'

function HomePage() {

    const [barWidth, setBarWidth] = useState("w-8/8")
    const [barColor, setBarColor] = useState("bg-green-900")




    return (
        <>
            <div className=" my-10 sm:mx-5 mx-1 flex flex-col justify-center  items-center ">


                <div className="mt-15"><opensans className='text-5xl font-semibold  sm:text-8xl'> Welcome  </opensans></div>
                <div className="my-10 uppercase "> <Link to="/Page1" > <Button >Start</Button ></Link></div>
            </div>
        </>

    )
}

export default HomePage