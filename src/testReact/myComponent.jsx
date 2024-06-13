import React, {useState} from "react";

function MyCompinent()
{
    const[name, setName] = useState("Geust");
    const [age, setAge] = useState(0);
    const [isEmployed, setIsEmployed] = useState(false);
    const updateName = (name) =>
        {
            setName()
        }
    const incrementAge  = () =>
    {
        setAge(age+ 1);
    }
    const toggleEmployedStatus= () =>
        {
            setIsEmployed(!isEmployed);
        }
    return(
        <div>
            <p>Name : {name}</p>
            <button onClick={updateName(name)}>set name</button>
            <p>age : {age}</p>
            <button onClick={incrementAge}>Increment age</button>
            <p>is Employed : {isEmployed ? "YES" : "NO"}</p>
            <button onClick={toggleEmployedStatus}>toggle Employed Status </button>
        </div>
    )
}

export default MyCompinent