import {getAllCountries} from "../services/countryService";
import {useVisaStore} from "../store/visaCheckerStore.ts";
import {useEffect, useState} from "react";
import {Country} from "../models";

function CountryPicker() {
    const {
        countries,
        setCountries,
        setDestination,
    } = useVisaStore();

    const [letter, setLetter] = useState('');
    const [filteredCountries, setFilteredCountries] = useState(countries);
    const [showCountries, setShowCountries] = useState<boolean>(false)
    const [showPicker, setShowPicker] = useState<boolean>(false)
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')
    useEffect(() => {
        getAllCountries().then(countries => {
            console.log(countries.length);
            setCountries(countries);
        })
    }, [])
    const handleLetterClick = (selectedLetter: string) => {
        if (selectedLetter === letter) {
            setShowCountries(!showCountries);
            return;
        }
        setShowCountries(true);
        setLetter(selectedLetter);

        const matches = countries.filter((country) =>
            country.name.toUpperCase().startsWith(selectedLetter)
        );

        setFilteredCountries(matches);
        console.log(filteredCountries);
    };

    const handleCountryClick = (country: Country) => {
        setShowCountries(false);
        setShowPicker(false);
        setDestination(country);
    }


    return (
        <div className="flex flex-col justify-center items-center">
            <div
                onClick={() => setShowPicker(!showPicker)}
                className="p-2 bg-coral-pink-200 w-45 text-center m-2 cursor-pointer"
            >
                <p>Choose Destination</p>
            </div>

            {showPicker && (
                <div className="flex flex-col items-center gap-4">
                    {/* Alphabet Picker */}
                    <div className="flex flex-wrap place-items-center gap-2 justify-center">
                        {alphabet.map((letter) => (
                            <div
                                key={letter}
                                onClick={() => handleLetterClick(letter)}
                                className="bg-african-violet-200 text-center p-2 text-2xl w-32 hover:bg-african-violet-300 cursor-pointer"
                            >
                                {letter}
                            </div>
                        ))}
                    </div>

                    {/* Filtered Countries */}
                    {showCountries && (
                        <div className="flex flex-wrap justify-center gap-2">
                            {filteredCountries.map((country) => (
                                <div
                                    key={country.id}
                                    onClick={() => handleCountryClick(country)}
                                    className="items-center gap-2 p-2 flex flex-col flex-wrap w-32 justify-center text-center cursor-pointer"
                                >
                                    <img src={country.flag_img} alt={country.name} className="w-12"/>
                                    <p>{country.name}</p>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            )}
        </div>
    )
}

export default CountryPicker;