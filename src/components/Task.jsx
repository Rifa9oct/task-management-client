import axios from "axios";
import { MdEdit } from "react-icons/md";
import { RiDeleteBin6Line } from "react-icons/ri";
import useAxiosPrivate from "../hooks/useAxiosPrivate";
import Swal from "sweetalert2";

const Task = ({ task, tasks, refetch }) => {
    const axiosPrivate = useAxiosPrivate()
    const handleDelete = () => {
        axiosPrivate.delete(`/tasks/${task._id}`)
            .then(res => {
                if (res.data.deletedCount > 0) {
                    Swal.fire("Good job", "Delete successfully", "success");
                }
                refetch();
            })
    }

    return (
        <div>
            <div className="flex my-6 items-center justify-between bg-yellow-100 p-4 rounded-lg shadow-lg">
                <p className="">{task.title}</p>
                <div className="text-xl text-white">
                    <button className="bg-blue-500 p-2 rounded-md mx-5"><MdEdit/></button>
                    <button onClick={handleDelete} className="bg-red-500 p-2 rounded-md"><RiDeleteBin6Line/></button>
                </div>
            </div>
        </div>
    );
};

export default Task;