import React, {useState} from "react";

function ToDoList()
{
    const [tasks, setTasks] = useState(["Eat Breafast", "Take Shower", "Walk the Dog"])
    const[newsTask, setNewTsak] = useState("");

    function handleInputChange(event)
    {
            setNewTsak(event.target.value)
    }
    function AddTask()
    {
        if(newsTask.trim() !== "")
        {
            setTasks( t => [...t, newsTask])
            setNewTsak("");
        }
    }
    function DeleteTask(index)
    {
        const updateTasks= tasks.filter((_, i) =>   i !== index);
        setTasks(updateTasks);

    }
    function moveTaskUp(index)
    {
        if(index > 0)
        {
            console.log("hii");
            const updateTasks =[...tasks];
            [updateTasks[index], updateTasks[index - 1]] = 
            [updateTasks[index - 1], updateTasks[index]];
            setTasks(updateTasks);
        }
    }
    function moveTaskDown(index)
    {
        console.log("index", index);
        console.log("index", tasks.length - 1);
        
        if(index < tasks.length - 1 )
        {
            const updateTasks =[...tasks];
            [updateTasks[index], updateTasks[index + 1]] = 
            [updateTasks[index + 1], updateTasks[index]];
            setTasks(updateTasks);
        }

    }
    return(<>
    <div className="to-do-list">
        <h1>To-Do-List</h1>
        <div>
            <input type="text" placeholder="Enter a task"
             value={newsTask} onChange={handleInputChange} />
             <button className="add-button" onClick={AddTask}>Add Task</button>
        </div>
        <ol>
            {tasks.map((task, index) =>
            <li key={index}>
                <span className="text">{task}</span>
                <button className="delete-button" 
                onClick={() => DeleteTask(index)}>Delete</button>

                <button className="move-button" 
                onClick={() => moveTaskUp(index)}>UP</button>

                <button className="move-button" 
                onClick={() => moveTaskDown(index)}>Down</button>
            </li>)}
        </ol>
    </div>
    </>)
}
export default ToDoList