
import profilePic from './download.jpeg'
function Card()
{
    return(
        <div className="Card">
            <img src={profilePic} alt="profile Picture"></img>
            <h2>hamza</h2>
            <p>i'm student at 1337 school</p>
        </div>

    )
}

export default Card