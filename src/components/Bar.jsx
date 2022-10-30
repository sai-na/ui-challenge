import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Bar() {

    const navigate = useNavigate()

    const [barWidth, setBarWidth] = useState("w-full")

    const [barColor, setBarColor] = useState("bg-emerald-600")

    // const w = [0.125, 0.25, 0.375, 0.5, 0.625, 0.75, 0.875, 1]


    useEffect(() => {
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
            navigate("/")
        }, 6000)

    }, [])




    return (
        <div className="mt-2 w-full  flex justify-start bg-gray-600 ">
            <div id='bar' className={`  ${barWidth}   ${barColor}    h-full  text-center `}>

                <div className="inline-block"></div></div>
        </div>
    )
}

export default Bar