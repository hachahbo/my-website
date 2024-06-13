function Button_event()
{
    let count = 0;
    // const handleClick = (name) =>
    // {
    //     if(count < 3)
    //     {
    //         count++;
    //         console.log(`${name} you clicked me ${count} time`)
            
    //     }
    //     else
    //         console.log(`${name} stop clicking me`);
    // } 
    const handleClick = (e) =>
    {
            if(count < 3)
            {
                count++;
                e.target.textContent = "OUCH!";
                
            }
            else
                e.target.textContent = `stop clicking me`;

    }

    return(
        <button onClick={(e) => handleClick(e)}>Click me</button>
    )
}
export default Button_event