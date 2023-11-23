import axios from "axios";
import { UserLogin, UserReg } from "../interfaces/User";



export async function userRegister(userData: UserReg) {
    const config = {
        method: 'post',
        maxBodyLength: Infinity,
        url: 'https://beckend-banners-deploy.onrender.com/api/users/register/',
        headers: { 
          'Content-Type': 'application/json'
        },
        data : userData
      };
      try {
        const response = await axios.request(config)
        return response;
      } catch (error) {
        console.log(error);
      }
}


export async function userLogin(userData: UserLogin) {

    const config = {
        method: 'post',
        maxBodyLength: Infinity,
        url: 'https://beckend-banners-deploy.onrender.com/api/users/login/',
        headers: { 
          'Content-Type': 'application/json'
        },
        data : userData
      };
      try {
        const response = await axios.request(config)
        return response;
      } catch (error) {
        throw new Error(`${error}`);
      }
}



