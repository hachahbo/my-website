import React, {useState, useEffect} from "react";

function Component_useEffect()
{
    const [count, setCount] = useState(0);

    useEffect(() => { 
        document.title = `Count : ${count}`
    })
    function addCount()
    {
        setCount(c => c + 1)
    }
    function subtractCount()
    {
        setCount(c => c - 1)
    }
    return (
        <>
        <p>count: {count}</p>
        <button onClick={addCount}>Add </button>
        <button onClick={subtractCount}>subtract </button>
        </>
    )
}
export default Component_useEffect