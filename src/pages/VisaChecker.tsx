import {getAllCountries, getValidPassports, getVisaStatus} from "../services/countryService.ts";
import {useEffect, useState} from "react";
import Country from "../models/Country.ts";
import VisaStatus from "../models/Visas.ts";
import '../styles/visas.css'
import {formatEnum} from "../services/utils.ts";
function VisaChecker() {
    const emptyStatus = {
        id: 0,
        status: "",
        notes: "",
        passport: { name: "", flag: "" },
        destination: { name: "", flag: "" }
    }

    const [countries, setCountries] = useState<Country[]>([]);
    const [availableCountries, setAvailableCountries] = useState<Country[]>([]);
    const [passport, setPassport] = useState<number>(0);
    const [destination, setDestination] = useState<number>(0);
    const [visaStatus, setVisaStatus] = useState<VisaStatus>(emptyStatus);

    const handlePassportChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setPassport(parseInt(e.target.value));
    };

    const handleDestinationChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setDestination(parseInt(e.target.value));
    };

    const handleVisaStatusClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        getVisaStatus(passport, destination)
            .then((res) => {
                console.log(res);
                setVisaStatus(res[0]);
            })
            .catch((err) => {
                console.error(err);
            });
    };

    useEffect(() => {
        getAllCountries().then(countries => {
            console.log(countries.length);
            setCountries(countries);
            setDestination(countries[0].id);
        })

            .catch(e => console.log(e));
        getValidPassports().then(passports => {
            console.log(passports.length);
            setAvailableCountries(passports);

            setPassport(passports[0].id)
        }) .catch(error => console.log(error));

    }, []);
    return (
        <>
            <div className="w-full min-h-screen flex flex-col justify-center items-center px-4 py-8">
                <form className="flex flex-col items-center w-full max-w-md space-y-6 bg-stone-100 rounded-md p-10">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-center sm:gap-4 w-full">
                        <div className="flex flex-col w-full mb-4 sm:mb-0">
                            <label className="text-lg sm:text-xl mb-1">Passport:</label>
                            <select onChange={handlePassportChange} className="text-lg sm:text-xl w-full px-2 py-1 rounded border bg-white">
                                {availableCountries.map((country: Country) => (
                                    <option key={country.id} value={country.id}>{country.name}</option>
                                ))}
                            </select>
                        </div>

                        <div className="flex flex-col w-full">
                            <label className="text-lg sm:text-xl mb-1">Destination:</label>
                            <select onChange={handleDestinationChange} className="text-lg sm:text-xl w-full px-2 py-1 rounded border bg-white">
                                {countries.map((country: Country) => (
                                    <option key={country.id} value={country.id}>{country.name}</option>
                                ))}
                            </select>
                        </div>
                    </div>

                    <button onClick={handleVisaStatusClick} className="p-2 text-lg rounded-md text-white w-full sm:w-auto" id="check-actions">
                        Check Status
                    </button>
                </form>

                <div className="flex justify-center items-center p-4 w-full">
                    <div className="status text-center w-full max-w-md p-4 rounded" id={visaStatus.status.toLowerCase()}>
                        <h2 className="text-2xl sm:text-3xl font-semibold">{formatEnum(visaStatus.status)}</h2>
                        <p className="text-lg sm:text-2xl font-light">{visaStatus.notes}</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default VisaChecker;