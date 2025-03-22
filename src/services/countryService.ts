import axios, { AxiosResponse } from "axios";

async function getAllCountries()  {
    const countriesResponse: AxiosResponse = await axios.get("https://ariventures-data.vercel.app/countries");
    return countriesResponse.data;
}

 async function getValidPassports() {
    const passportResponse: AxiosResponse = await axios.get("https://ariventures-data.vercel.app/visas/valid-passports");
    return passportResponse.data;
}

async function getVisaStatus (passport: number, destination: number){
    console.log(passport, destination);
    const visaResponse: AxiosResponse = await axios.get(`https://ariventures-data.vercel.app/visas/status?passport=${passport}&destination=${destination}`);
    return visaResponse.data;
}
export {getAllCountries, getValidPassports, getVisaStatus};