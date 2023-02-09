import { useState } from "react";
import './List.css'



function List({ todo, setTodo }) {
    const [edit, setEdit] = useState();
    const [value, setValue] = useState('');
    // const [status, setStatus] = useState(false);

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

    const changeStatus = (id) => {
        const newTodo = [...todo].map(item => {
            if (item.id == id) {
                item.status = !item.status
            }
            return item;
        })
        setTodo(newTodo);
    }

   

    return (
        <>
            <div className="list">

                {
                    todo.map(item =>
                        <div key={item.id}>

                            <div className="title__div">
                                <p className="title">{item.title}</p>
                                <p>{item.status ? <span className="done">Done</span> : <span className="inprogress">In progress</span>}</p>
                            </div>


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
                                        <button onClick={() => changeStatus(item.id)}>Change status</button>
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