import axios, { AxiosResponse } from "axios";

async function getAllCities() {
    const citiesResponse: AxiosResponse = await axios.get("https://ariventures-data.vercel.app/cities/all");
    return citiesResponse.data;
}

async function getCitiesByCountry(countryId: number) {
    const citiesByCountryResponse: AxiosResponse = await axios.get(`https://ariventures-data.vercel.app/cities/by-country?country=${countryId}`);
    console.log(citiesByCountryResponse.data);
    return citiesByCountryResponse.data;
}
export {getAllCities, getCitiesByCountry}


