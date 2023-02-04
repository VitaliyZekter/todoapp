import { useState } from "react";
import './List.css'



function List({ todo, setTodo }) {
    const [edit, setEdit] = useState();
    const [value, setValue] = useState('');

    function deleteTask(id) {
        const newTodo = [...todo.filter(item => item.id !== id)]
        setTodo(newTodo);
    }

    const editTask = (id, title) => {
        setEdit(id);
        setValue(title)
    }

    const editedTodo = (id) => {
        const newTodo = [...todo].map(item => {
            if (item.id == id) {
                item.title = value;
            }
            return item;
        })
        setTodo(newTodo);
        setValue('');
        setEdit(null);
    }

    return (
        <>
            <div className="list">
                {
                    todo.map(item =>
                        <div key={item.id}>
                            <p className="title">{item.title}</p>
                            {
                                edit === item.id ? (
                                    <div>
                                        <input type="text" value={value} onChange={(e) => setValue(e.target.value)} />
                                        <button onClick={() => editedTodo(item.id)}>Save changes</button>
                                    </div>
                                ) : (
                                    <div>
                                        <button onClick={() => deleteTask(item.id)}>Delete task</button>
                                        <button onClick={() => editTask(item.id, item.title)}>Edit task</button>
                                    </div>
                                )
                            }

                        </div>)

                }
            </div>
        </>
    );

}

export default List;