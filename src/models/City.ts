import {Country, getEmptyCountry} from "./Country.ts";
import {Image} from ".";

type City = {
    id: number;
    name: string;
    state_province: string;
    country: Country;
    images: Image[];
}

type FormCity =  {
    name: string;
    state_province: string;
    country_id: number;
}

export const emptyCity: City = {
    id: 0,
    name: "",
    state_province: "",
    country: getEmptyCountry(),
    images: [],
};

export type {City, FormCity};