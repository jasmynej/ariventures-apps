import {getAllCountries, getValidPassports, getVisaStatus} from "../services/countryService.ts";
import {useEffect, useState} from "react";
import Country from "../models/Country.ts";
import VisaStatus from "../models/Visas.ts";
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
            <div>
                <form>
                    <label>Passport: </label>
                    <select onChange={handlePassportChange}>
                        {availableCountries.map((country: Country) => (
                            <option key={country.id} value={country.id}>{country.name}</option>
                        ))}
                    </select>
                    <label>Destination: </label>
                    <select onChange={handleDestinationChange}>
                        {countries.map((country: Country) => (
                            <option key={country.id} value={country.id}>{country.name}</option>
                        ))}
                    </select>
                    <button onClick={handleVisaStatusClick}>Check Status</button>
                </form>
                <p>{passport}</p>
                <p>{destination}</p>
                <div>
                    <p>{visaStatus.status}</p>
                    <p>{visaStatus.notes}</p>
                </div>

            </div>
        </>
    )
}

export default VisaChecker;