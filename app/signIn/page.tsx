"use client"

import ApiCaller from "@/services/api";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { myUserData } from "../type";
import { FaRegEyeSlash,FaRegEye} from "react-icons/fa6";


const SignIn = () => {


    const [emile,setEmile] = useState ('');
    const [password,setPassword] = useState ('');
    const [error,setError] = useState<boolean> (false);
    const [logeIn , setLogeIn] = useState <boolean> (false)
    const [myData,setMyData] = useState<myUserData|undefined>();
    const [showPass,setShowPass] = useState(false);

    const router = useRouter()

    useEffect(()=>{
        ApiCaller().getUser()
            .then(res => setMyData(res.data))
    },[])
    
    const handleSubmit = ()=>{
        if(myData?.length != 0){
            myData?.filter((item)=>{
                if(item.password == password && item.emile == emile){
                    setError(false)
                    router.push('/dashbord')
                }else{
                    setError(true)
                    setLogeIn(false)
                }
            })
        }else(
            setError(true)
        )
     }

     const seePass = ()=>{
        if(showPass)
            setShowPass(false)
        else
            setShowPass(true)
     }


    return ( 
        <div className="mt-4">
            <div className="flex justify-center items-center">
            </div>
            <form className="w-full flex items-center justify-center h-screen">
                <div className={`flex  flex-col gap-8 px-16 py-20 rounded-lg animate-op border border-black -translate-y-10`}>
                   <div className="flex items-center justify-center -translate-y-8">
                        <h1 className="text-4xl font-semibold">Sign In</h1>
                   </div>
                    <div className="flex gap-4 justify-between items-center">
                        <label >Username</label>
                        <input 
                            onChange={(e)=>{
                                e.preventDefault(),
                                setEmile(e.target.value)
                            }} 
                            type="text" 
                            className="h-10 outline-none bg-blue-100 text-black px-3 rounded-lg " 
                            required
                        />
                    </div>
                    <div className="flex relative gap-4 justify-between items-center">
                        <label>Password</label> 
                        <input 
                            onChange={(e)=>{
                                e.preventDefault(), 
                                setPassword(e.target.value)
                            }}
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
                    <div className="flex justify-center translate-y-10 gap-4">
                        <button 
                            type="button"
                            onClick={handleSubmit}
                            className=" px-6 py-3 rounded-lg bg-blue-300 text-black hover:bg-blue-600 hover:text-white">
                            Sign In
                        </button>
                        <Link 
                            href={'/signUp'}
                            onClick={handleSubmit}
                            className=" px-6 py-3 rounded-lg bg-blue-300 text-black hover:bg-blue-600 hover:text-white">
                            Sign Up
                        </Link>
                        
                    </div>
                </div>
            </form>
        </div>
     );
}
 
export default SignIn;