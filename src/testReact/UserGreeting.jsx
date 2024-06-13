function UserGreeting(props)
{
    if(props.isLoggedIn)
    {
        return <h2>hello {props.userName}</h2>
    }
        return <h2>please log in to continue</h2>
}
export default UserGreeting