import { Link } from "react-router-dom";
import img from "../../assets/banner.png"

const Banner = () => {
    return (
        <div className="flex absolute top-0 flex-col-reverse lg:flex-row items-center justify-between pt-[150px] lg:pt-0 md:pt-[100px] pb-[80px] lg:pb-0 md:pb-[50px] lg:h-[700px] bg-blue-50 w-full px-[150px]">
            <div>
                <h1 className="text-6xl lg:text-7xl text-center lg:text-start font-bold">Manage Your<br /><span className="text-blue-600">Task</span> Quickly</h1>
                <p className="mt-3 text-center lg:text-start text-slate-600 w-[400px] md:w-[600px] text-xl font-medium">Empower Your Productivity with Pro Tasker. Your Ultimate Task Management Solution! Streamline your workflow, stay organized, and achieve your goals effortlessly.</p>
                <div className="flex justify-center lg:justify-start">
                    <Link to="/login">
                        <button className="mt-5 font-bold text-lg px-4 py-2 text-white bg-gradient-to-r from-purple-600 to-blue-500 hover:from-blue-500 hover:to-purple-600 rounded-lg"> Get Started</button>
                    </Link>
                </div>
            </div>

            <img className="lg:w-[600px]" src={img} alt="banner image" />
        </div>
    );
};

export default Banner;