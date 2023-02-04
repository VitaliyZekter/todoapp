import { useState } from "react";
import uuid from 'react-uuid'

function AddTodo({ todo, setTodo }) {

    const [value, setValue] = useState('');
    const addTodo = () => {
        setTodo([
            ...todo, {
                id: uuid(),
                title: value,
            }
        ])
        setValue('');
    }


    return (
        <>
            <div>
                <h2 className="Add">Add new task</h2>
                <input type="text" value={value} onChange={(e) => setValue(e.target.value)} />
                <button onClick={addTodo}>Add</button>
            </div>

        </>
    );
}

export default AddTodo;