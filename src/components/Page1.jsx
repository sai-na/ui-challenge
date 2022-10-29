import React from 'react'
import { Link } from "react-router-dom"
import Button from './Button'
import Bar from './Bar'

function Page1() {
    return (
        <>
            <div className=" my-10 sm:mx-5 mx-1 flex flex-col justify-center  items-center ">

                <Bar className="mt-15" />
                <div className="mt-8"><p className='text-2xl font-mono  sm:text-6xl'> Would you like to receive
                    our weekly newsletter ?  </p></div>
                <div className="my-3 uppercase "> <Link to="/Page2" > <Button >Yes</Button ></Link></div>
                <div className="my-3 uppercase "> <Link to="/" > <Button >No</Button ></Link></div>
                <div className="my-3 uppercase "> <Link to="/Page2" > <Button >Ask me later</Button ></Link></div>
            </div>
        </>
    )
}

export default Page1