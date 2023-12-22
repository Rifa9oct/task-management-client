import axios from "axios";
import { useEffect, useState } from "react";


const ManageTask = () => {
    const [tasks, setTasks] = useState([])
    useEffect(()=>{
        axios("http://localhost:5000/tasks")
        .then(res =>{
            setTasks(res.data)
        })
    },[])
    console.log(tasks)

    return (
        <div>
            <h1>manage task</h1>
        </div>
    );
};

export default ManageTask;