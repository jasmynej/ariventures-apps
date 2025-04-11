import axios, { AxiosResponse } from "axios";
import {FormCity} from "../models/City.ts";

async function getAllCities() {
    const citiesResponse: AxiosResponse = await axios.get("https://ariventures-data.vercel.app/cities/all");
    return citiesResponse.data;
}

async function getCitiesByCountry(countryId: number) {
    const citiesByCountryResponse: AxiosResponse = await axios.get(`https://ariventures-data.vercel.app/cities/by-country?country=${countryId}`);
    console.log(citiesByCountryResponse.data);
    return citiesByCountryResponse.data;
}

async function addCites(cites: FormCity[]){
    const addedCities: AxiosResponse = await axios.post("https://ariventures-data.vercel.app/cities/add", cites);
    return addedCities.data;
}
export {getAllCities, getCitiesByCountry, addCites}


