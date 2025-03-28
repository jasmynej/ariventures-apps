import {useEffect, useState} from "react";
import City, {emptyCity} from "../models/City.ts";
import {getAllCities} from "../services/cityService.ts";
import {TrashIcon, EyeIcon} from "@heroicons/react/24/outline";
import CityDetailsModal from "./components/CityDetailsModal.tsx";

function AdminCities() {

    const [cities, setCities] = useState<City[]>([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedCity, setSelectedCity] = useState<City>(emptyCity);

    useEffect(() => {
        getAllCities()
            .then(res => setCities(res))
        .catch(err => console.log(err));
    }, []);

    const openCityModal = (city: City) => {
        setIsModalOpen(true);
        setSelectedCity(city);
    }

    const closeCityModal = () => {
        setIsModalOpen(false);
        setSelectedCity(emptyCity);
    }

    return (
        <div className="p-5 h-screen scroll-auto">
            <p>Cities</p>
            <table className="border p-5">
                <thead className="text-left">
                <tr>
                    <th className="px-4 py-2 border border-black">Name</th>
                    <th className="px-4 py-2 border border-black">Country</th>
                    <th className="px-4 py-2 border border-black">Actions</th>
                </tr>
                </thead>
                <tbody>
                {cities.map((city) => (
                    <tr key={city.id} className="border-b">
                        <td className="border-r p-4">{city.name}</td>
                        <td className="border-r p-4">{city.country.name}</td>
                        <td>
                            <button className="m-2 p-2 bg-blue-200 hover:bg-blue-400" onClick={()=> openCityModal(city)}><EyeIcon className="w-4"/> </button>
                            <button className="p-2 m-2 bg-red-200 hover:bg-red-400"><TrashIcon className="w-4"/> </button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
            <CityDetailsModal city={selectedCity} isOpen={isModalOpen} onClose={closeCityModal} onSave={getAllCities} />
        </div>
    )
}

export default AdminCities;