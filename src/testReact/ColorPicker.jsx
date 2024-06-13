import React, {useState} from "react"
function ColorPicker()
{
    const [color, setColor] = useState("#FFFFF");
    function handleColorChange(event)
    {
        setColor(event.target.value)
    }
    return(<>
        <div className="Color-picker-container">
            <h1>Color picker</h1>
            <div className="color-display" style={{backgroundColor: color}}>
                <p> selected Color: {color}</p>
            </div>
            <label> Select a Color</label>
            <input type="color" value={color} onChange={handleColorChange}/>
        </div>
        </>)
}
export default ColorPicker