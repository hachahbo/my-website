import React, {useState} from "react";

function Component_array()
{
    const [food, setfoods] = useState(["Apple", "Orange", "Bannan"]);

    function handleAddFood()
    {
        const newFood = document.getElementById("foodInput").value;
        document.getElementById("foodInput").value = "";
        setfoods(f => [...f, newFood]);
    }
    function handleRemoveFood(index)
    {
        setfoods(food.filter((_, i)=> i !== index));
    }
    return(<>
        <div>
            <h2>list of food</h2>
            <lu>
                {food.map((food, index) => 
                <li key={index} onClick={() => handleRemoveFood(index)}>{food}
                </li>
            )}
            </lu>
            <input type="text" id="foodInput" placeholder="Enter food name"/>
            <button  onClick={handleAddFood}>Add food</button>
        </div>
    </>)
}
export default Component_array