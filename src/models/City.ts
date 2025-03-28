import {Country, getEmptyCountry} from "./Country.ts";
import Image from "./Image.ts";

type City = {
    id: number;
    name: string;
    state_province: string;
    country: Country;
    images: Image[];
}

export const emptyCity: City = {
    id: 0,
    name: "",
    state_province: "",
    country: getEmptyCountry(),
    images: [],
};

export default City;