import { MdEdit } from "react-icons/md";
import { RiDeleteBin6Line } from "react-icons/ri";
import useAxiosPrivate from "../hooks/useAxiosPrivate";
import Swal from "sweetalert2";
import { useDrag } from "react-dnd";

const Task = ({ task, tasks, setTasks }) => {
    const [{ isDragging }, drag] = useDrag(() => ({
        type: "task",
        item: {id: task._id},
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging()
        })
    }))
    // console.log(isDragging)

    const axiosPrivate = useAxiosPrivate()
    const handleDelete = () => {
        axiosPrivate.delete(`/tasks/${task._id}`)
            .then(res => {
                if (res.data.deletedCount > 0) {
                    Swal.fire("Good job", "Delete successfully", "success");
                }
                const remaining = tasks.filter (item => item._id !== task._id)
                setTasks(remaining);
            })
    }

    return (
        <div ref={drag} className={`cursor-move flex my-6 items-center justify-between bg-yellow-100 p-4 rounded-lg shadow-lg ${isDragging? "opacity-30" : "opacity-100"}`}>
            <p className="">{task.title}</p>
            <div className="text-xl text-white">
                <button className="bg-blue-500 p-2 rounded-md mx-5"><MdEdit /></button>
                <button onClick={handleDelete} className="bg-red-500 p-2 rounded-md"><RiDeleteBin6Line /></button>
            </div>
        </div>
    );
};

export default Task;