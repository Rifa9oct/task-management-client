import Section from "../../components/Section";
import useAxiosPrivate from "../../hooks/useAxiosPrivate";
import { useContext, useEffect, useState } from "react";
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { AuthContext } from "../../AuthProvider/AuthProvider";

const ManageTask = () => {
    const { user } = useContext(AuthContext);
    const axiosPrivate = useAxiosPrivate();
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        axiosPrivate.get("/tasks")
            .then(res => (setTasks(res.data)))
    }, [axiosPrivate])

    const statuses = ["todo", "ongoing", "completed"]

    return (
        <div>
            <h1 className="text-center text-5xl mt-20 font-bold">Manage <span className="text-yellow-700">your task</span></h1>
            <DndProvider backend={HTML5Backend}>
                <div className="flex gap-16 justify-center mt-20">
                    {
                        statuses.map((status, index) => <Section key={index} status={status} tasks={tasks} setTasks={setTasks} ></Section>)
                    }
                </div>
            </DndProvider>
        </div>
    );
};

export default ManageTask;