import img from "../../assets/banner.png"

const Banner = () => {
    return (
        <div className="flex items-center justify-between h-[700px] bg-blue-50 w-full px-[150px]">
            <div>
                <h1 className="text-7xl font-bold">Manage Your<br/><span className="text-blue-600">Task</span> Quickly</h1>
                <p className="mt-3 text-slate-600 w-[600px] text-xl font-medium">Empower Your Productivity with Pro Tasker. Your Ultimate Task Management Solution! Streamline your workflow, stay organized, and achieve your goals effortlessly.</p>
                <button className="mt-5 font-bold text-lg px-4 py-2 text-white bg-gradient-to-r from-purple-600 to-blue-500 hover:from-blue-500 hover:to-purple-600 rounded-lg"> Get Started</button>
            </div>

            <img className="w-[600px]" src={img} alt="banner image" />
        </div>
    );
};

export default Banner;