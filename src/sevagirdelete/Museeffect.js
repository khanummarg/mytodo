import React, {useEffect, useState} from 'react'

function Museeffect(){

    const [value, setValue] = useState(0);

        useEffect((e)=>{
            fetch(`https://jsonplaceholder.typicode.com/posts`)
            .then(stream=>stream.json())
            .then(result=>result)

        }, [value])
    
    return (
        <div>
            <p>{value}</p>
            <input 
            type="text"
            value={value}
            onChange={(event)=>setValue(event.target.value)} />
        </div>
    )
}

export default Museeffect