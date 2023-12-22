import axios from "axios";

const axiosPrivate = axios.create({
    baseURL:"https://task-management-server-khaki.vercel.app"
})

const useAxiosPrivate = () => {
    return axiosPrivate;
};

export default useAxiosPrivate;