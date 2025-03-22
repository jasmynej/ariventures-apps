import {getAllCountries} from "../services/countryService.ts";
import {useEffect, useState} from "react";
import Country from "../models/Country.ts";

function AdminCountries() {

    const [countries, setCountries] = useState<Country[]>([]);
    
    useEffect(() => {
        getAllCountries()
            .then((countries) => {
                setCountries(countries);
            })
    })
    
    return (
        <div className="p-5 h-screen scroll-auto">
            <p>Countries</p>
            <table className="border p-5">
                <thead className="text-left">
                    <tr>
                        <th className="px-4 py-2 border border-black">Flag</th>
                        <th className="px-4 py-2 border border-black">Name</th>
                        <th className="px-4 py-2 border border-black">Capital</th>
                        <th className="px-4 py-2 border border-black">Region</th>
                        <th className="px-4 py-2 border border-black">Sub Region</th>
                    </tr>
                </thead>
                <tbody>
                {countries.map((country) => (
                    <tr key={country.id} className="border-b">
                        <td className="border-r p-4">
                            <img src={country.flag_img} className="w-12" alt="flag"/>
                        </td>
                        <td className="border-r p-4">{country.name}</td>
                        <td className="border-r p-4">{country.capital}</td>
                        <td className="border-r p-4">{country.region}</td>
                        <td className="border-r p-4">{country.sub_region}</td>
                        
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    )
}

export default AdminCountries;