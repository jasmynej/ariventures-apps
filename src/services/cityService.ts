import axios, { AxiosResponse } from "axios";

async function getAllCities() {
    const citiesResponse: AxiosResponse = await axios.get("https://ariventures-data.vercel.app/cities/all");
    return citiesResponse.data;
}

export {getAllCities}


