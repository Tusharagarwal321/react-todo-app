import { useState } from "react"
import { useDispatch } from "react-redux";
import { addTodo } from "../Features/Todo/todoSlice";

export default function AddForm() {
    const [task, setTask] = useState("");
    const dispatch = useDispatch();

    const handleChange = (e) => {
        e.preventDefault();
        console.log(task);
        dispatch(addTodo(task));
        setTask("");
    }
    return (
        <form onSubmit={handleChange}>
            <input style={{height:"35px", borderRadius:"5px"}} type="text" onChange={(e) => setTask(e.target.value) }/>&nbsp;
            <button>Submit</button>
        </form>
    )
}