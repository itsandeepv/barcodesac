import React, { useState } from 'react'

function Test() {
    const [clr, setclr] = useState({
        text: "",
        backgroundC: ""
    })

    return (
        <div style={clr?.backgroundC ? { background:clr?.backgroundC ,width:"400px" , height:"400px"}:{background:"#fff",width:"400px" , height:"400px"}}>
            <div style={clr?.text ? { color:clr?.text}:{color:"#000"}}>this is test</div>
            <div style={{display:"flex" ,gap:"20px"}}>

            <button style={clr?.backgroundC ? { color:clr?.backgroundC ,background:clr?.text }:{color:"#000"}} 
            onClick={() => {
                setclr((pre) => ({
                    text:"#fff",
                    backgroundC:"red",
                }))
                console.log(clr);
            }}>Red
            </button>
            <button style={clr?.backgroundC ? { color:clr?.backgroundC ,background:clr?.text }:{color:"#000"}} 
             onClick={() => {
                setclr((pre) => ({
                    text:"#fff",
                    backgroundC:"green",
                }))
                console.log(clr);
            }}>Green</button>
            </div>
        </div>
    )
}

export default Test