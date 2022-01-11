import { useState } from "react";
import { v4 as uuid4 } from "uuid";

function TodoForm({newTodo}) {

    const [task, setTask] = useState("");
    const [btnDisabled, setBtnDisabled] = useState(true);
    const [message, setMessage] = useState("");

    const updateTask = (e) => {
        if(task === '') {
            setBtnDisabled(true);
            setMessage("");
        } else if (task!=="" && task.trim().length <10) {
            setBtnDisabled(true);
            setMessage("Please add atleast 10 charaters for task");
        } else {
            setBtnDisabled(false);
            setMessage("");
        }
        setTask(e.target.value);
    }

    const formSubmition = (e) => {
        e.preventDefault();
        newTodo({
            id: uuid4(),
            task: task
        });

        // clear task input after submission
        setTask("");
        setBtnDisabled(true);
    }

    return (
        <>
            <form onSubmit={formSubmition}>
                <div className="input-group">
                <input onChange={updateTask} style={{padding: "8px"}} type="text" text={task} placeholder="Enter task here" /> 
                </div>
                <input disabled={btnDisabled} style={{marginTop: "5px"}} type="submit" className="btn btn-secondary" text="Add Task" />
                <p>{message}</p>
            </form>  
        </>
    )
}

export default TodoForm;
