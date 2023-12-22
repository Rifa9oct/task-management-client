import Section from "../../components/Section";
import useAxiosPrivate from "../../hooks/useAxiosPrivate";
import { useQuery } from "@tanstack/react-query";
const ManageTask = () => {
    const axiosPrivate = useAxiosPrivate();
    const { data: tasks = [], refetch } = useQuery({
        queryKey: ['tasks'],
        queryFn: async () => {
            const res = await axiosPrivate.get('/tasks');
            return res.data;
        }
    })

    const statuses = ["todo", "ongoing", "completed"]

    return (
        <div>
            <div className="flex gap-16 justify-center mt-20">
                {
                    statuses.map((status, index) => <Section key={index} status={status} tasks={tasks} refetch={refetch}></Section>)
                }
            </div>
        </div>
    );
};

export default ManageTask;