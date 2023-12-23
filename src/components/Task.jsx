import { MdEdit } from "react-icons/md";
import { RiDeleteBin6Line } from "react-icons/ri";
import useAxiosPrivate from "../hooks/useAxiosPrivate";
import Swal from "sweetalert2";
import { useDrag } from "react-dnd";
import { Link } from "react-router-dom";

const Task = ({ task, tasks, setData }) => {
    const [{ isDragging }, drag] = useDrag(() => ({
        type: "task",
        item: { id: task._id },
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging()
        })
    }))
    // console.log(isDragging)

    const axiosPrivate = useAxiosPrivate()

    const handleDelete = () => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosPrivate.delete(`/tasks/${task._id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            Swal.fire("Good job", "Delete successfully", "success");
                        }
                        const remaining = tasks.filter(item => item._id !== task._id)
                        setData(remaining);
                    })
            }
        });
    }

    return (
        <div ref={drag} className={`cursor-move flex my-6 items-center justify-between bg-yellow-100 p-4 rounded-lg shadow-lg ${isDragging ? "opacity-30" : "opacity-100"}`}>
            <p className="">{task.title}</p>
            <div className="text-xl text-white">
                <Link to={`/dashboard/updateTask/${task._id}`}>
                    <button className="bg-blue-500 p-2 rounded-md mx-5"><MdEdit /></button>
                </Link>
                <button onClick={handleDelete} className="bg-red-500 p-2 rounded-md"><RiDeleteBin6Line /></button>
            </div>
        </div>
    );
};

export default Task;