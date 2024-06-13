import React, {useState}  from "react";


function MyCompinentOnChange()
{
    const [name, setsomthing] = useState("Guest");
    const [quantity, setQuantity] = useState(0);
    const [payment, selectPayment] = useState("default");
    const [shipping, selectShipping] = useState("default");
    function handleChanges(event)
    {
        setsomthing(event.target.value)
    }
    function handleChangesQuantity(event)
    {
        setQuantity(event.target.value);
    }
    function seletingPayment(event)
    {
        selectPayment(event.target.value)
    }
    function selectingShipping(event)
    {
        selectShipping(event.target.value);
    }
    return(
        <div>
            <input value={name} onChange={handleChanges}></input>
            <p>Name : {name}</p>
            <input value={quantity} type="number" onChange={handleChangesQuantity}></input>
            <p>Name : {quantity}</p>
            <select value={payment} onChange={seletingPayment}>
                <option value="none">Select Payment</option>
                <option value="Visa" >Visa</option>
                <option value="masterCart" >masterCart</option>
                <option value="GiftCart" >GiftCart</option>
            </select>
            <p>Payment : {payment}</p>
            <label>
                <input value="Pick up"
                checked = {shipping=== "Pick up"}  onChange={selectingShipping}
                 type="radio"/> Pick up
            </label>
            <label>
                <input value="Delivery"  checked = {shipping=== "Delivery"}  onChange={selectingShipping}
                 type="radio" /> Delivery
            </label>
            <p>shipping : {shipping}</p>
        </div>
    )
}
export default MyCompinentOnChange