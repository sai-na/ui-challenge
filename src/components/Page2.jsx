import React from 'react'
import { Link } from "react-router-dom"
import Button from './Button'

function Page2() {
    return (
        <>
            <div className=" my-10 sm:mx-5 mx-1 flex flex-col justify-center  items-center ">


                <div className="mt-15"><p className='text-2xl font-mono  sm:text-6xl'> Lorem ipsum, dolor sit amet consectetur  elit. suscipit  laborum aperiam dolore?  </p></div>
                <div className="flex mt-5">
                    <div className="m-7 px-5 uppercase "> <Link to="/Page2" > <Button padding={"px-16 py-2"}>a</Button ></Link></div>
                    <div className="m-7 px-5 uppercase "> <Link to="/" > <Button padding={"px-16 py-2"} >b</Button ></Link></div>
                </div>
                <div className="flex">
                    <div className="m-7 px-5 uppercase "> <Link to="/Page2" > <Button padding={"px-16 py-2"} >c</Button ></Link></div>
                    <div className="m-7 px-5 uppercase "> <Link to="/" > <Button padding={"px-16 py-2"}>d</Button ></Link></div>
                </div>


            </div>
        </>
    )
}

export default Page2