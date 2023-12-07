"use client"

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export type myUserTypeForLogeIn = Array<{
    id:number,
    userName : string , 
    password : string
}>

export const myUserForLogIn : myUserTypeForLogeIn = []

const SignIn = () => {


    const [userName,setUserName] = useState ('');
    const [password,setPassword] = useState ('');
    const [error,setError] = useState<boolean> (false);
    const [logeIn , setLogeIn] = useState <boolean> (false)

    const router = useRouter()


    const handleSubmit = ()=>{
        if(myUserForLogIn){
            myUserForLogIn.filter((item)=>{
                if(item.password == password && item.userName == userName){
                    setError(false)
                    router.push('/dashbord')
                }else{
                    setError(true)
                    setLogeIn(false)
                }
            })
        }else(
            setError(false)
        )
     }

     console.log(myUserForLogIn);
     


    return ( 
        <div className="mt-4">
            <div className="flex justify-center items-center">
                {error && (
                    <h1 className="text-6xl text-red-500 font-serif font-semibold">
                        error
                    </h1>
                )}
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
                                setUserName(e.target.value)
                            }} 
                            type="text" 
                            className="h-10 outline-none bg-blue-100 text-black px-3 rounded-lg " 
                            required
                        />
                    </div>
                    <div className="flex gap-4 justify-between items-center">
                        <label>Password</label> 
                        <input 
                            onChange={(e)=>{
                                e.preventDefault(), 
                                setPassword(e.target.value)
                            }}
                            type="password" 
                            className={`h-10 outline-none bg-blue-100 ${error&&'border-2 border-red-500'} outline-none text-black px-3 rounded-lg`}
                        />
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