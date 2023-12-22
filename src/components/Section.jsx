import { useEffect, useState } from "react";
import Header from "./Header";
import Task from "./Task";

const Section = ({ status, tasks, refetch }) => {
    const [todos, setTodos] = useState([]);
    const [ongoing, setOngoing] = useState([]);
    const [completed, setCompleted] = useState([]);

    useEffect(() => {
        const fTodos = tasks.filter(task => task.status === "todo");
        const fOngoing = tasks.filter(task => task.status === "ongoing");
        const fCompleted = tasks.filter(task => task.status === "completed");

        setTodos(fTodos);
        setOngoing(fOngoing);
        setCompleted(fCompleted);

    }, [tasks])

    let text = "Todo";
    let bg = "bg-yellow-600";
    let tasksToMap = todos;

    if (status === "completed") {
        text = "Completed"
        bg = "bg-green-500"
        tasksToMap = completed
    }
    if (status === "ongoing") {
        text = "Ongoing"
        bg = "bg-purple-500"
        tasksToMap = ongoing
    }

    return (
        <div>
            <Header text={text} bg={bg} count={tasksToMap.length}></Header>
            <div className="mt-5">
                {
                    tasksToMap.map(task =>
                        <Task key={task._id}
                            task={task}
                            refetch={refetch}
                        ></Task>)
                }
            </div>
        </div>
    );
};

export default Section;