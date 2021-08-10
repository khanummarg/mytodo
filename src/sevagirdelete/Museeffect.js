import React, {useEffect, useState} from 'react'

function Museeffect(){

    const [value, setValue] = useState(0);
    const [data, setData] = useState("44");

        useEffect((e)=>{
            fetch(`https://jsonplaceholder.typicode.com/posts`)
            .then(stream=>stream.json())
            .then(result=>setData(result[0].title))
            console.log("jj")

        }, [value])
    
    return (
        <div>
            <p>{value}</p>
            <p>{data}</p>
            <input 
            type="text"
            value={value}
            onChange={(event)=>setValue(event.target.value)} />
        </div>
    )
}

export default Museeffect