"use client"

import { useState } from "react";
import { useRouter } from "next/navigation";
import ApiCaller from "@/services/api";
import { FaRegEyeSlash,FaRegEye} from "react-icons/fa6";

const SignUp = () => {

    const router = useRouter()
    const [emile,setEmile] = useState ('');
    const [password,setPassword] = useState ('');
    const [repeat,setRepeat] = useState ('');
    const [error,setError] = useState<boolean> (false);
    const [showPass,setShowPass] = useState(false);
    const [showRepPass,setShowRepPass] = useState(false)


    function isValidPassword(p:string){
        return /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,32}$/.test(p);
    }
    function isValidEmail(e:string){
        return /\S+@\S+\.\S+/.test(e);
      }

    const handleSubmit = ()=>{
        if(isValidEmail(emile) && isValidPassword(password) && password == repeat){
            console.log('true')
            setError(false)
            ApiCaller().newUser({
                emile : emile,
                password : password
            })
            router.push('signIn')
        }else{
            console.log('false')
            setError(true)
        }
     }

     const seePass = ()=>{
        if(showPass)
            setShowPass(false)
        else
            setShowPass(true)
     }
     const seeRepPass = ()=>{
        if(showRepPass)
            setShowRepPass(false)
        else
            setShowRepPass(true)
     }

    return ( 
        <div className="mt-4">
            <form className="w-full flex items-center justify-center h-screen">
                <div className={`flex  flex-col gap-8 px-16 py-20 rounded-lg animate-op border -translate-y-10`}>
                   <div className="flex items-center justify-center -translate-y-8">
                        <h1 className="text-4xl font-semibold">Sign Up</h1>
                   </div>
                    <div className="flex gap-4 justify-between items-center">
                        <label >Emile</label>
                        <input 
                            onChange={(e)=>{
                                e.preventDefault()
                                setEmile(e.target.value)
                            }} 
                            type="text" 
                            className="h-10 text-black px-3 outline-none rounded-lg bg-blue-100" 
                        />
                    </div>
                    <div className="flex relative gap-4 justify-between items-center">
                        <label>Password</label> 
                        <input 
                            onChange={(e)=> setPassword(e.target.value)} 
                            value = {password}
                            type={showPass?'text':'password'} 
                            className={`h-10 outline-none bg-blue-100 ${error&&'border-2 border-red-500'} outline-none text-black px-3 rounded-lg`}
                        />
                        <div className="absolute right-3">
                            {!showPass ? (
                                <button 
                                    type="button" 
                                    onClick={seePass}
                                >
                                    <FaRegEye/>
                                </button>
                            ):(
                                <button 
                                    type="button" 
                                    onClick={seePass}
                                >
                                    <FaRegEyeSlash/>
                                </button>
                            )
                            }
                        </div>
                    </div>
                    <div className="flex relative gap-4 justify-between items-center">
                        <label>Repeat Password</label>
                        <input 
                            onChange={(e)=> setRepeat(e.target.value)}  
                            type={showRepPass? 'text' : 'password' } 
                            className={`h-10  outline-none bg-blue-100 ${error&&'border-2 border-red-500'} outline-none text-black px-3 rounded-lg`} 
                        />
                        <div className="absolute right-3">
                            {!showRepPass ? (
                                <button 
                                    type="button" 
                                    onClick={seeRepPass}
                                >
                                    <FaRegEye/>
                                </button>
                            ):(
                                <button 
                                    type="button" 
                                    onClick={seeRepPass}
                                >
                                    <FaRegEyeSlash/>
                                </button>
                            )

                            }
                        </div>
                    </div>
                    <div className="flex justify-center translate-y-10 gap-4">
                        {/* <Link 
                            href={'/signIn'}
                            className=" px-6 py-3 rounded-lg bg-blue-300 text-black hover:bg-blue-600 hover:text-white"
                        > 
                            Sign In
                        </Link> */}
                        <button 
                            type="button"
                            onClick={handleSubmit}
                            className=" px-6 py-3 rounded-lg bg-blue-300 text-black hover:bg-blue-600 hover:text-white">
                            Sign Up
                        </button>
                    </div>
                </div>
            </form>
        </div>
     );
}
 
export default SignUp;