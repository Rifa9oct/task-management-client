import { useEffect, useState } from "react";
import Header from "./Header";
import Task from "./Task";
import { useDrop } from "react-dnd";
import useAxiosPrivate from "../hooks/useAxiosPrivate";
import Swal from "sweetalert2";

const Section = ({ status, tasks, setTasks }) => {
    const axiosPrivate = useAxiosPrivate();
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

    //drop
    const [{ isOver }, drop] = useDrop(() => ({
        accept: "task",
        drop: item => addItemToSection(item.id),
        collect: (monitor) => ({
            isOver: !!monitor.isOver()
        })
    }))

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

    const addItemToSection = (id) => {
        setTasks((prev) => {
            const modifyTasks = prev.map(task => {
                if (task._id === id) {
                    const mTask = { ...task, status: status };
                    // console.log(mTask)
                    axiosPrivate.patch(`/tasks/${id}`, mTask)
                        .then(res => {
                            if (res.data.modifiedCount > 0) {
                                Swal.fire({
                                    position: "top-center",
                                    icon: "success",
                                    title: "Updated status!",
                                    showConfirmButton: false,
                                    timer: 1500
                                });
                            }
                        })
                    return mTask;
                }
                return task;
            });
            return modifyTasks;
        })
    };

    return (
        <div ref={drop} className={`p-3 rounded-lg ${isOver ? "bg-slate-200" : ""} `}>
            <Header text={text} bg={bg} count={tasksToMap.length}></Header>
            <div className="mt-5">
                {
                    tasksToMap.map(task =>
                        <Task key={task._id}
                            task={task}
                            tasks={tasks}
                            setTasks={setTasks}
                        ></Task>)
                }
            </div>
        </div>
    );
};

export default Section;