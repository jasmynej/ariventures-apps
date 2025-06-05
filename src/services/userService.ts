import axios, { AxiosResponse } from "axios";

async function getUserProfileById(userId: string){
    const userResponse: AxiosResponse = await axios.get(`https://ariventures-data.vercel.app/users/profile/by-id/${userId}`);
    return userResponse.data;
}

async function getUserProfileByUsername(username: string){
    const userResponse: AxiosResponse = await axios.get(`https://ariventures-data.vercel.app/users/profile/by-username/${username}`);
    return userResponse.data;
}

export {getUserProfileById, getUserProfileByUsername};