import Section from "../../components/Section";
import useAxiosPrivate from "../../hooks/useAxiosPrivate";
import { useContext, useEffect, useState } from "react";
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { AuthContext } from "../../AuthProvider/AuthProvider";

const ManageTask = () => {
    const { user } = useContext(AuthContext);
    const axiosPrivate = useAxiosPrivate();
    const [data, setData] = useState([]);

    useEffect(() => {
        axiosPrivate.get("/tasks")
            .then(res => (setData(res.data)))
    }, [axiosPrivate])

    const tasks = data.filter( item => item.email === user.email);

    const statuses = ["todo", "ongoing", "completed"]

    return (
        <div>
            <h1 className="text-center text-5xl mt-20 font-bold">Manage <span className="text-yellow-700">your task</span></h1>
            <DndProvider backend={HTML5Backend}>
                <div className="flex flex-col mt-10 lg:flex-row lg:gap-16 justify-center lg:mt-20">
                    {
                        statuses.map((status, index) => <Section key={index} status={status} tasks={tasks} setData={setData} ></Section>)
                    }
                </div>
            </DndProvider>
        </div>
    );
};

export default ManageTask;