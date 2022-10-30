import React, { useEffect, useState, useRef } from 'react'
import { Link } from "react-router-dom"
import { useNavigate } from 'react-router-dom'


import Button from './Button'
import Bar from './Bar'
function Page2() {


    const mounted = useRef(false)


    const [barWidth, setBarWidth] = useState("w-full")

    const [barColor, setBarColor] = useState("bg-emerald-600")

    const navigate = useNavigate()

    useEffect(() => {
        mounted.current = true
        setTimeout(() => {
            setBarWidth("w-5/6")
            setBarColor("bg-emerald-600")
        }, 1000)
        setTimeout(() => {
            setBarWidth("w-4/6")
            setBarColor("bg-emerald-600")
        }, 2000)
        setTimeout(() => {
            setBarWidth("w-3/6")
            setBarColor("bg-emerald-600")
        }, 3000)
        setTimeout(() => {
            setBarWidth("w-2/6")
            setBarColor("bg-orange-600")
        }, 4000)
        setTimeout(() => {
            setBarWidth("w-1/6")
            setBarColor("bg-red-600")
        }, 5000)
        setTimeout(() => {
            setBarWidth("w-0")

        }, 6000)

        return () => {
            mounted.current = false
        }

    }, [])



    setTimeout(() => {
        if (mounted.current) navigate("/")

    }, 6000)

    return (
        <>
            <div className=" my-10 sm:mx-5 mx-1 flex flex-col justify-center  items-center ">


                <Bar className="mt-15" barWidth={barWidth} barColor={barColor} />
                <div className="mt-8"><p className='text-2xl font-mono  sm:text-6xl'>  Lorem ipsum, dolor sit amet consectetur  elit. suscipit  laborum aperiam dolore?  </p></div>






                {/* <Bar barWidth={barWidth} barColor={barColor} />
                <div className="mt-15"><p className='text-2xl font-mono  sm:text-6xl'> Lorem ipsum, dolor sit amet consectetur  elit. suscipit  laborum aperiam dolore?  </p></div> */}
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