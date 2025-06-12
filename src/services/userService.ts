import axios, { AxiosResponse } from "axios";
import {UserProfile} from "../models";

async function getUserProfileById(userId: string){
    const userResponse: AxiosResponse = await axios.get(`https://ariventures-data.vercel.app/users/profile/by-id/${userId}`);
    return userResponse.data;
}

async function getUserProfileByUsername(username: string){
    const userResponse: AxiosResponse = await axios.get(`https://ariventures-data.vercel.app/users/profile/by-username/${username}`);
    return userResponse.data;
}

async function updateUserProfile(newUserProfile: UserProfile, id: number){
    const userProfileResponse: AxiosResponse = await axios.put(`https://ariventures-data.vercel.app/users/update-profile/${id}`, newUserProfile);
    return userProfileResponse.data;
}

export {getUserProfileById, getUserProfileByUsername, updateUserProfile};