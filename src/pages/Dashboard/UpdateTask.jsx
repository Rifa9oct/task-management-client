import { useForm } from "react-hook-form";
import todo from "../../assets/todo.png";
import useAxiosPrivate from "../../hooks/useAxiosPrivate";
import Swal from "sweetalert2";
import { useLoaderData } from "react-router-dom";

const UpdateTask = () => {
    const lodedTasks = useLoaderData();
    const { _id, title, description, priority, duration } = lodedTasks;
    // console.log(lodedTasks);
    const { register, handleSubmit } = useForm();
    const axiosPrivate = useAxiosPrivate();

    const onSubmit = data => {
        const UpdateTask = {
            title: data.title,
            description: data.description,
            priority: data.priority,
            duration: data.duration,
        }
        // console.log(UpdateTask)
        axiosPrivate.put(`/tasks/${_id}`, UpdateTask)
        .then(res => {
            console.log(res.data);
            if (res.data.modifiedCount > 0) {
                Swal.fire({
                    title: 'Good job!',
                    text: 'Task  updated successfully.',
                    icon: 'success',
                    confirmButtonText: 'OK'
                })
            }
        })
    }

    return (
        <div className="flex flex-col justify-center items-center bg-yellow-50  min-h-screen">
            <h1 className="text-center text-4xl mb-8 font-bold bg-yellow-50">Update your <span className="text-yellow-700">task</span></h1>
            <div className="relative  bg-white w-[600px] pl-6 border shadow-lg rounded-tl-[50px] rounded-br-[50px]">
                <div className="absolute -left-[235px] -top-[100px]"><img className="w-[300px]" src={todo} alt="" /></div>
                <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                    <div className="form-control">
                        <label>
                            <span className="text-base">Task Title</span>
                        </label>
                        <div>
                            <input type="text" {...register("title")}
                                name="title" defaultValue={title} placeholder="task title" className="input input-sm input-warning w-[500px]" />
                        </div>
                    </div>

                    <div className="form-control">
                        <label>
                            <span className="text-base">Description</span>
                        </label>
                        <div>
                            <textarea type="text" {...register("description")} name="description" defaultValue={description} placeholder="description" className="textarea textarea-warning w-[500px]" />
                        </div>
                    </div>

                    <div>
                        <label>
                            <span className="text-base">Select Priority</span>
                        </label>
                        <select defaultValue={priority} {...register("priority")} className="select select-warning w-[500px]">
                            <option value="">select</option>
                            <option value="low">Low</option>
                            <option value="moderate">Moderate</option>
                            <option value="high">High</option>
                        </select>
                    </div>

                    <div className="form-control">
                        <label>
                            <span className="text-base">Duration</span>
                        </label>
                        <div>
                            <input type="number" {...register("duration")} name="duration" defaultValue={duration} placeholder="type your duration days" className="input input-sm input-warning w-[500px]" />
                        </div>
                    </div>

                    <div className="form-control mt-6">
                        <button type="submit" className="btn border-0 w-[500px] text-white bg-gradient-to-r from-yellow-400 to-yellow-800 shadow-lg hover:bg-gradient-to-r hover:from-yellow-800 hover:to-yellow-400">Update Task</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default UpdateTask;