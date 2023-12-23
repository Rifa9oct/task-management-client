import location from "../../assets/location.png"
import { IoCall } from "react-icons/io5";
import { MdEmail, MdLocationPin } from "react-icons/md";
import "./contact.css";

const Contact = () => {

    return (
        <div className="text-center mt-32 lg:mb-0 mb-10 p-5 lg:p-0">
            <h1 className="text-4xl mb-5 font-bold">OUR <span className="text-green-600">CONTACTS</span></h1>
            <p className="mt-2 text-xs">As an experienced Event Management company. we have all kind of Event <br /> equipment, logistics and resources available</p>

            <p className="text-md mt-4"><MdLocationPin className=" inline-block mr-1 text-2xl text-green-600"></MdLocationPin>16, Kemal Ataturk Avenue, Banani, Dhaka, 1213, Bangladesh.</p>

            <div className="flex flex-col md:flex-row justify-center items-center md:gap-10 mb-10">
                <div className="flex items-center font-semibold gap-2">
                    <IoCall className="text-xl text-green-600"></IoCall>
                    <p className="text-md mt-3 md:mt-0">01727710506</p>
                </div>
                <div className="flex items-center font-semibold gap-2" >
                    <MdEmail className="text-xl text-green-600"></MdEmail>
                    <p className="text-md">dhakaeventplanners@gmail.com</p>
                </div>
            </div>
            <img className="w-[800px] rounded-lg shadow-xl mx-auto animate-up" src={location} alt="" />
        </div>
    );
};

export default Contact;