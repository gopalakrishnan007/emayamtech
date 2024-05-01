// import { UseEffect, useState } from "react"

import { useState } from "react"

// export default function Modeltest(){
//     const [modelren,nomodelrender] = useState(false)
//     function hellow(){
//         nomodelrender(!modelren)
//     }
//     return(     
//         <>
//             <p>{String(modelren) } </p>
           
//             {/* <button onClick={() => nomodelrender(modelren+1) }>click to render the model</button>
//             <button onClick={() => nomodelrender(modelren-1) }>click to render the model 11</button> */}
//             <button onClick={() => nomodelrender(!modelren) }>click to render the model</button>
//             <button onClick={hellow()}>click to render the model111</button>

//         </>

//     )           
// }   

export default function Modeltest(){
    const[intitaltrue, setfalse] = useState(true)
    function funchange() {
        setfalse(false)
    }
    return(
        <>
            <p>{String(intitaltrue)}</p>
            <button onClick={()=> setfalse(!intitaltrue)}>click to change</button>
            <button onClick={funchange}>click to change in a function</button>
        </>
    )
}