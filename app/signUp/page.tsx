"use client"

import { useState } from "react";
import Link from "next/link";
import { myUserForLogIn } from "../signIn/page";
import { useRouter } from "next/navigation";

const SignUp = () => {

    const router = useRouter()
    const [userName,setUserName] = useState ('');
    const [password,setPassword] = useState ('');
    const [repeat,setRepeat] = useState ('');
    const [error,setError] = useState<boolean> (false);

    const handleSubmit = ()=>{
        if( userName && password.valueOf() == repeat.valueOf()){
             if(userName.length >=6 && password.length >=6 && repeat.length >=6){
                 const dynamicId = myUserForLogIn.length + 1
                 setError(false)
                 myUserForLogIn.push(
                     {
                         id:dynamicId,
                         userName : userName , 
                         password : password
                     }
                 )
                 router.push('/signIn')
             }else{
                 setError(true)
             }
        }
        else{
         setError(true)
        }
     }

    return ( 
        <div className="mt-4">
            <form className="w-full flex items-center justify-center h-screen">
                <div className={`flex  flex-col gap-8 px-16 py-20 rounded-lg animate-op border -translate-y-10`}>
                   <div className="flex items-center justify-center -translate-y-8">
                        <h1 className="text-4xl font-semibold">Sign Up</h1>
                   </div>
                    <div className="flex gap-4 justify-between items-center">
                        <label >Username</label>
                        <input 
                            onChange={(e)=>{
                                e.preventDefault()
                                setUserName(e.target.value)
                            }} 
                            type="text" 
                            className="h-10 text-black px-3 outline-none rounded-lg bg-blue-100" 
                        />
                    </div>
                    <div className="flex gap-4 justify-between items-center">
                        <label>Password</label> 
                        <input 
                            onChange={(e)=> setPassword(e.target.value)} 
                            value = {password}
                            type="password" 
                            className={`h-10 outline-none bg-blue-100 ${error&&'border-2 border-red-500'} outline-none text-black px-3 rounded-lg`}
                        />
                    </div>
                    <div className="flex gap-4 justify-between items-center">
                        <label>Repeat Password</label>
                        <input 
                            onChange={(e)=> setRepeat(e.target.value)}  
                            type="password" 
                            className={`h-10 outline-none bg-blue-100 ${error&&'border-2 border-red-500'} outline-none text-black px-3 rounded-lg`} 
                        />
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