import React,{useState} from "react";
import { FaLock, FaUser } from "react-icons/fa"

const Login = () =>{
    return(
        // <div className="w-screen md:w-screen md:h-screen bg-gradient-to-r from-red-300 via-orange-100 border-t-rose-100 ">
           
        //     <div className="">
        //        <form>
        //         <input>Name</input>
        //        </form>
        //     </div>
           
        
        // </div>
        <div className="w-screen md:w-screen md:h-screen bg-gradient-to-r from-blue-300 via-cyan-100 to-white flex items-center justify-center ">
            <div className="max-w-sm w-full rounded-2xl bg-white p-6 opacity-50 shadow-2xl drop-shadow-2xl backdrop-blur-sm" >
                <h2 className="font-sans text-4xl font-bold text-center text-blue-800 mt-2 mb-6 ">Login</h2>
                <form>
                    <div className="relative mb-6 ">
                        <input className="w-full px-10 py-2 pr-4 rounded-lg bg-blue-50 focus:outline-blue-600 focus:ring-blue-700  shadow-cyan-200 shadow-2xs drop-shadow-lg"  
                        type="email"
                        id="email"
                        placeholder="Username/ Email"
                        />
                        <FaUser className="absolute left-3 top-3 text-blue-500"/> 
                        
                    </div>
                    
                    <div className="relative mb-6">
                        <input className="w-full px-10 py-2 rounded-lg bg-blue-50 focus:outline-blue-600 focus:ring-blue-700 shadow-cyan-200 shadow-2xs drop-shadow-lg" 
                        type="password"
                        id="password"
                        placeholder="Password"
                        />
                        <FaLock className="absolute left-3 top-3 text-blue-500"/> 
                       
                    </div>
                    <div className="text-end  text-blue-800 mt-6" > 
                        <h2 className="font-semibold hover:text-cyan-700">Forget Password?</h2>
                    </div>
                    <div className="relative mt-6 mb-6 px-20 ">
                        <button className="bg-blue-500 transition delay-100 duration-200 ease-in-out hover:-translate-y-1 hover:scale-105 hover:bg-blue-800 w-full px-10 py-2 rounded-lg font-extrabold text-white  ">
                            Go
                        </button>
                    </div>
                    <div className="relative mt-6 mb-6 px-20">
                        <button className="bg-cyan-600 transition delay-100 duration-200 ease-in-out hover:-translate-y-1 hover:scale-105 hover:bg-cyan-300 w-full px-10 py-2 rounded-lg font-extrabold text-white ">
                            Sign Up
                        </button>
                    </div>
                </form>

            </div>

        </div>
    )    
}
export default Login;