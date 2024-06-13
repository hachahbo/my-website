import React, {useState} from "react";

function Component_object()
{
    const [car, setCar] = useState({year:2024, make:"ford", model: "mustang"});
    function handleYearChannge(event)
    {

        setCar(c => ({...c, year: event.target.value}));
    }
    function handleMakeChannge(event)
    {
        setCar(c => ({...c, make: event.target.value}))
    }
    function handleModelChannge(event)
    {
        setCar(c => ({...c, model: event.target.value}))
    }
    return(<>
        <div>
            <p>your favorite car is : {car.year} {car.make} {car.model}</p>
            <input type="number"  value={car.year} onChange={handleYearChannge}/><br/>
            <input type="text"  value={car.make} onChange={handleMakeChannge}/><br/>
            <input type="text"  value={car.model} onChange={handleModelChannge}/><br/>

        </div>
    </>)
}
export default Component_object