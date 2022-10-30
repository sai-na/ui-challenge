import React, { useEffect, useState, useRef } from 'react'
import { Link } from "react-router-dom"
import { useNavigate } from 'react-router-dom'
import Button from './Button'
import Bar from './Bar'

function Page1() {

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