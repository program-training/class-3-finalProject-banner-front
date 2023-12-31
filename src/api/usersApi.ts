import axios from "axios";
import { UserLogin, UserReg } from "../interfaces/User";

export async function userRegister(userData: UserReg) {
  const config = {
    method: "post",
    maxBodyLength: Infinity,
    url: `${import.meta.env.VITE_BASE_URL}/users/register/`,
    headers: {
      "Content-Type": "application/json",
    },
    data: userData,
  };
  try {
    const response = await axios.request(config);
    return response;
  } catch (error) {
    console.log(error);
  }
}

export async function userLogin(userData: UserLogin) {
  console.log(import.meta.env.VITE_BASE_URL)
  const config = {
    method: "post",
    maxBodyLength: Infinity,
    url: `${import.meta.env.VITE_BASE_URL}/users/login/`,
    headers: {
      "Content-Type": "application/json",
    },
    data: userData,
  };
  try {
    const response = await axios.request(config);
    return response;
  } catch (error) {
    throw new Error(`${error}`);
  }
}
