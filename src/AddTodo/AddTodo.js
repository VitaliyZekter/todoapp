import { useState } from "react";
import uuid from 'react-uuid'
import './AddTodo.css'

function AddTodo({ todo, setTodo }) {

    const [value, setValue] = useState('');
    const addTodo = () => {
        setTodo([
            ...todo, {
                id: uuid(),
                title: value,
                status: false,
            }
        ])
        setValue('');
    }

    const listDone = () => {
        let count = 0;
        todo.map(item => {
            if (item.status) {
                count++
            }
            return item;
        })
        return count;
    }
    const listInProgress = () => {
        let count = 0;
        todo.map(item => {
            if (!item.status) {
                count++
            }
            return item;
        })
        return count;
    }

    return (
        <>
            <div className="info">
                <div>
                    <h2 className="Add">Add new task</h2>
                    <input type="text" value={value} onChange={(e) => setValue(e.target.value)} />
                    <button onClick={addTodo}>Add</button>
                </div>
                <div className="status">
                    <p>Done: {listDone()}</p>
                    <p>In progress: {listInProgress()}</p>
                </div>
            </div>

        </>
    );
}

export default AddTodo;