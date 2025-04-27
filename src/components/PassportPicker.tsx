import {getValidPassports} from "../services/countryService";
import {useVisaStore} from "../store/visaCheckerStore.ts";
import {useEffect, useState} from "react";
import {Country} from "../models";

function PassportPicker(){
    const {availableCountries, setAvailableCountries, setPassport} = useVisaStore()
    const [showPicker, setShowPicker] = useState<boolean>(false)
    useEffect(() => {
        getValidPassports().then(passports => {
            setAvailableCountries(passports);
        })
    }, []);
    const handlePassportChange = (passport: Country) => {
        setPassport(passport);
        setShowPicker(false);
    }
    return (
        <div className="flex flex-col justify-center items-center">
            <div
                onClick={()=>setShowPicker(!showPicker)}
                className="p-2 bg-coral-pink-200 w-45 text-center m-2 cursor-pointer">
                Select Passport
            </div>
            {showPicker && (
                <div className="flex flex-wrap items-center justify-center gap-4">
                    {availableCountries.map((country: Country) => (
                        <div
                            onClick={() => handlePassportChange(country)}
                            key={country.id}
                            className="items-center gap-2 p-2 flex flex-col flex-wrap w-32 justify-center text-center cursor-pointer">
                            <img src={country.flag_img} alt={country.name} className="w-12"/>
                            <p>{country.name}</p>
                        </div>
                    ))}
                </div>

            )}

        </div>
    )

}

export default PassportPicker;