import React, { useState } from "react";
import ReactDOM from "react-dom";

const Index = () => {
    const INIT_VALUE = {
        todo: ''
    }

    const [task, setTask] = useState(INIT_VALUE)

    const handleChange = (e) => {
        const {name, value} = e.target
        setTask((state) => ({...state, [name]:value}))
    }

    return (
        <div>
            <form>
                <label></label>
                <input
                name="todo"
                value={task.todo}
                placeholder="Add to do"
                onChange={handleChange}
                />
            </form>
        </div>
    )
}

ReactDOM.createRoot(document.getElementById('root')).render(
    <Index/>
)