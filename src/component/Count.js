import React,{useState} from 'react'


function Count() {

    const [counter,setCounter] = useState(0) 
    {console.log("out of return")}

    function incre() {
        setCounter(function (params) {
           return params+1
        })
    }


    function decre() {
       incre()
       incre()
    }

    return (
        
        <div>
            {console.log("In return")}
            {/* <button onClick = {incre}>increament</button> */}
            <button onClick = {decre}>decreament</button>
            <h1>{counter}</h1>
        </div>
    )
}

export default Count
