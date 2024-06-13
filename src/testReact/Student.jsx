import PropTypes from 'prop-types'
function Student(props)
{
    return(
        <>
            <div className="Student">
                <p>Name : {props.Name}</p>
                <p>age : {props.age}</p>
                <p>Student : {props.IsStudent ? "yes" : "NO"}</p>
            </div>
        </>
    );
};
Student.PropTypes = {
    Name: PropTypes.string,
    age: PropTypes.number,
    IsStudent: PropTypes.bool
}
Student.defaultProps =
{
    Name: "Guest",
    age: 0,
    IsStudent: false
}
export default Student