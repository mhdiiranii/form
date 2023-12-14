import { myUserTypeForLogeIn } from "@/app/type";
import axios from "axios";

const ApiCaller = () => { 
        const AxiosRequest = axios.create({
            baseURL:" http://localhost:3004"
        });


        const getUser = ()=> AxiosRequest.get('/user');
        const newUser = (data:myUserTypeForLogeIn)=> AxiosRequest.post('/user',data);


        return {
            getUser,
            newUser
        }
}
 
export default ApiCaller;