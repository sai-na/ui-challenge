import React, { useEffect } from 'react'

function Bar() {

    const [barWidth, setBarWidth] = useState("w-8/8")
    const [barColor, setBarColor] = useState("bg-green-900")

    const w = ["0.125%", "0.25%", "0.375%", "0.5%", "0.625%", "0.75%", "0.875%", "100%"]

    useEffect(() => {
        for (let i = 8;i <= 1;i--) {


            setTimeout(() => {
                document.getElementById("bar").style.width = w[i]
                console.log(w[i])
            }, 800)
        }
        // const timer = setTimeout(() => {
        //     console.log('This will run after 1 second!')
        // }, 800)
        // return () => clearTimeout(timer)
    }, [])

    return (
        <div className="mt-2 w-full flex justify-start bg-gray-600 ">
            <div id='bar' className=" w-[80%]   bg-green-900 h-full  text-center "><div className="inline-block"></div></div>
        </div>
    )
}

export default Bar