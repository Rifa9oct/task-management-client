import { useForm } from "react-hook-form";
import { MdError } from "react-icons/md";
import todo from "../../assets/todo.png";
import useAxiosPrivate from "../../hooks/useAxiosPrivate";
import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import Swal from "sweetalert2";

const CreateTask = () => {
    const { user } = useContext(AuthContext);
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const axiosPrivate = useAxiosPrivate();

    const onSubmit = data => {
        const taskInfo = {
            name: user.displayName,
            email: user.email,
            title: data.title,
            description: data.description,
            priority: data.priority,
            duration: data.duration,
            status: "todo"
        }
        // console.log(taskInfo)
        axiosPrivate.post("/tasks", taskInfo)
            .then(res => {
                if(res.data.insertedId){
                    Swal.fire("Good job", "Task created successfully! 🥰", "success");
                }
            })
        reset();
    }

    return (
        <div className="flex flex-col justify-center items-center bg-yellow-50  min-h-screen">
            <h1 className="text-center text-4xl mb-8 font-bold bg-yellow-50">Create your <span className="text-yellow-700">daily task</span></h1>
            <div className="relative  bg-white w-[600px] pl-6 border shadow-lg rounded-tl-[50px] rounded-br-[50px]">
                <div className="absolute -left-[235px] -top-[100px]"><img className="w-[300px]" src={todo} alt="" /></div>
                <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                    <div className="form-control">
                        <label>
                            <span className="text-base">Task Title</span>
                        </label>
                        <div>
                            <input type="text" {...register("title", { required: true })}
                                name="title" placeholder="task title" className="input input-sm input-warning w-[500px]" />
                            {errors.title && <span className="text-sm text-red-500"><MdError className="text-lg inline" />Task title field is required.</span>}
                        </div>
                    </div>

                    <div className="form-control">
                        <label>
                            <span className="text-base">Description</span>
                        </label>
                        <div>
                            <textarea type="text" {...register("description", { required: true })} name="description" placeholder="description" className="textarea textarea-warning w-[500px]" />
                            {errors.description && <span className="text-sm text-red-500"><MdError className="text-lg inline" />Description field is required.</span>}
                        </div>
                    </div>

                    <div>
                        <label>
                            <span className="text-base">Select Priority</span>
                        </label>
                        <select  {...register("priority", { required: true })} className="select select-warning w-[500px]">
                            <option value="">select</option>
                            <option value="low">Low</option>
                            <option value="moderate">Moderate</option>
                            <option value="high">High</option>
                        </select>
                        {errors.priority && <span className="text-sm text-red-500"><MdError className="text-lg inline" /> This field is required.</span>}
                    </div>

                    <div className="form-control">
                        <label>
                            <span className="text-base">Duration</span>
                        </label>
                        <div>
                            <input type="number" {...register("duration", { required: true })} name="duration" placeholder="type your duration days" className="input input-sm input-warning w-[500px]" />
                            {errors.duration && <span className="text-sm text-red-500"><MdError className="text-lg inline" /> Duration field is required.</span>}
                        </div>
                    </div>

                    <div className="form-control mt-6">
                        <button type="submit" className="btn border-0 w-[500px] text-white bg-gradient-to-r from-yellow-400 to-yellow-800 shadow-lg hover:bg-gradient-to-r hover:from-yellow-800 hover:to-yellow-400">Create Task</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default CreateTask;