const UserBenefits = () => {
    return (
        <div className="mt-[100px] mb-[150px] p-5">
            <h1 className="text-5xl text-center font-bold mb-16">You Can be <span className="text-pink-600">Benefited</span></h1>
            <div className="flex flex-col lg:flex-row mx-auto justify-center items-center gap-8 ">
                {/* card-1 */}
                <div className="w-[400px] cursor-pointer p-8 h-[250px] hover:scale-105 transition-all bg-pink-100 relative group hover:bg-pink-200 rounded-lg shadow-lg" data-aos="flip-up">
                    <div>
                        <h1 className="text-3xl font-bold">Developers</h1>
                        <p className="text-sm mt-2">Streamline your project workflows and enhance collaboration with our task management website. Enjoy real-time updates, efficient task allocation, and organized documentation to boost productivity in your development projects.</p>
                    </div>

                    <div className="absolute rounded-lg top-0 left-0 w-1/2 h-full border-pink-600 border-t-8 transition-all group-hover:w-full"></div>
                    <div className="absolute rounded-lg top-0 left-0 w-full h-1/2 border-pink-600 border-l-8 transition-all group-hover:h-full"></div>
                </div>
                {/* card-2 */}
                <div className="w-[430px] cursor-pointer hover:scale-105 transition-all p-8 h-[300px] bg-pink-100 relative group hover:bg-pink-200 rounded-lg shadow-lg" data-aos="flip-down">
                    <div className="pt-6">
                        <h1 className="text-3xl font-bold">Corporate Professionals</h1>
                        <p className="text-sm mt-2">Elevate your team's efficiency with our task management platform designed for corporate professionals. Seamlessly coordinate tasks, monitor progress, and facilitate effective communication, ensuring your team achieves its goals in a streamlined and time-efficient manner.</p>
                    </div>

                    <div className="absolute rounded-lg top-0 left-0 w-1/2 h-full border-pink-600 border-t-8 transition-all group-hover:w-full"></div>
                    <div className="absolute rounded-lg top-0 left-0 w-full h-1/2 border-pink-600 border-l-8 transition-all group-hover:h-full"></div>
                </div>

                {/* card-3 */}
                <div className="w-[400px] hover:scale-105 transition-all cursor-pointer p-8 h-[250px] bg-pink-100 relative group hover:bg-pink-200 rounded-lg shadow-lg" data-aos="flip-up">
                    <div>
                        <h1 className="text-3xl font-bold">Bankers</h1>
                        <p className="text-sm mt-2">Empower your financial workflows by leveraging our task management website. Prioritize critical tasks, maintain compliance, and enhance team coordination to optimize your banking operations. Streamline your day-to-day activities and stay ahead in the dynamic financial industry.</p>
                    </div>

                    <div className="absolute rounded-lg top-0 left-0 w-1/2 h-full border-pink-600 border-t-8 transition-all group-hover:w-full"></div>
                    <div className="absolute rounded-lg top-0 left-0 w-full h-1/2 border-pink-600 border-l-8 transition-all group-hover:h-full"></div>
                </div>
            </div>
        </div>
    );
};

export default UserBenefits;
