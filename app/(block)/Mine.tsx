import Link from "next/link";

const Mine = () => {
    return ( 
        <div className="fixed bg-black bg-opacity-70 text-white top-0 left-0 right-0 bottom-0 flex justify-center items-center">
            <div className="flex flex-col  rounded-md shadow-lg shadow-white justify-between items-center border p-10 gap-10">
                <h1 className="w-full text-4xl font-serif font-semibold text-center">
                    welcome
                </h1>
                <p>
                    When working with the site, please do not refresh the site
                    ,Thank
                </p>
                <div className="">
                        {/* <Link
                        className="px-4 py-2 hover:bg-white hover:text-black duration-200 border rounded-lg" 
                        href={'/signIn'}
                    >
                        Sign In
                    </Link> */}
                    <Link 
                        className="px-4 py-2 border rounded-lg hover:bg-white hover:text-black duration-200" 
                        href={'signUp'}
                    >
                        Sign Up
                    </Link>
                </div>
            </div>
        </div>
     );
}
 
export default Mine;