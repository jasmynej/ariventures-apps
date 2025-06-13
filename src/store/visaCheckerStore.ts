import {create} from 'zustand'
import {Country} from "../models";
import {VisaStatus} from "../models";

const emptyStatus: VisaStatus = {
    id: 0,
    status: "",
    notes: "",
    passport: { name: "", flag: "" },
    destination: { name: "", flag: "" }
};

const emptyCountry:  Country ={
    id: 0,
    name: "",
    capital: "",
    region: "",
    sub_region: "",
    flag_img: "",
    img: ""
}

interface VisaCheckerStore {
    countries: Country[]
    availableCountries: Country[]
    visaStatus: VisaStatus
    passport: Country,
    destination: Country,
    setCountries: (countries: Country[]) => void
    setPassport: (passport: Country) => void
    setDestination: (destination: Country) => void
    setVisaStatus: (visaStatus: VisaStatus) => void
    setAvailableCountries: (countries: Country[]) => void
}

export const useVisaStore = create<VisaCheckerStore>((set) => ({
    countries: [],
    availableCountries: [],
    passport: emptyCountry,
    destination: emptyCountry,
    visaStatus: emptyStatus,
    setCountries: (countries: Country[]) => set({ countries }),
    setAvailableCountries: (availableCountries) => set({ availableCountries }),
    setPassport: (passport: Country) => set({ passport }),
    setDestination: (destination: Country) => set({ destination }),
    setVisaStatus: (visaStatus: VisaStatus) => set({ visaStatus }),
}));