import React,{ useState } from "react";
import { Link } from "react-router-dom";
import Register from "../Pages/register";

export default function Nav() {
    const [showRegister,setShowRegister] = useState(false)

    const handleRegister = () => {
        setShowRegister(!showRegister)
    }
    return (
        <div className="fixed z-[1000] w-full flex justify-between mx-10 ">
            <Link to='/'>
                <div className="flex items-center text-white w-fit">
                    <img src="./images/logo.png" alt="logo" className="w-[3.5rem] mt-5"></img>
                    <button className="bg-transparent whitespace-nowrap text-white font-semibold text-2xl ml-[1rem] ">Cyber Chikitsa</button>
                </div>
            </Link>
            <div className="flex justify-evenly whitespace-nowrap mr-28">
                <div className="flex justify-between bg-transparent text-white font-semibold text-xl grow md:hidden md:grow-0">
                    <Link to='/'>
                        <button className="cursor-pointer mt-6 mx-4">Home</button>
                    </Link>
                    <button className="cursor-pointer mt-6 mx-4">About</button>
                    <button className="cursor-pointer mt-6 mx-4">Our Team</button>
                    <Link to='/contactus'>
                        <button className="cursor-pointer mt-6 mx-4">Contact Us</button>
                    </Link>
                </div>
                <button onClick={handleRegister} className="bg-transparent border-2 border-white rounded-2xl text-[#FF00F5] font-semibold h-fit text-xl my-4 ml-3 py-2 px-4 w-fit">GET STARTED</button>
                <Register showRegisterProp = {showRegister}/>
            </div>
        </div>
    )
}