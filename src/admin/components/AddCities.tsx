import Modal from "../../components/Modal.tsx";
import { useState } from "react";
import { Country } from "../../models";
import {FormCity} from "../../models/City.ts";
import {addCites} from "../../services/cityService.ts";
import * as React from "react";

interface AddCityModalProps {
    isOpen: boolean;
    onClose: () => void;
    countries: Country[];
}

function AddCitiesModal({ isOpen, onClose, countries }: AddCityModalProps) {
    const emptyFormCity: FormCity = {
        name:"",
        state_province:"",
        country_id:0
    }
    const [cities, setCities] = useState<FormCity[]>([emptyFormCity]);

    const handleChange = (index: number, field: keyof FormCity, value: any) => {
        const updated = [...cities];
        updated[index] = { ...updated[index], [field]: value };
        setCities(updated);
    };

    const handleCountryChange = (index: number, countryId: number) => {
        const country = countries.find((c) => c.id === countryId);
        if (!country) return;

        const updated = [...cities];
        updated[index].country_id = country.id;
        setCities(updated);
    };

    const addCity = () => {
        setCities([...cities, emptyFormCity]);
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Submitting cities:", cities);
        // You can send `cities` to your backend here
        addCites(cities).then((cities) => {
            console.log("Added:", cities);
        });
        onClose();
    };

    return (
        <Modal isOpen={isOpen} onClose={onClose} width="w-2/3">
            <form onSubmit={handleSubmit}>
                {cities.map((city, index) => (
                    <div key={index} className="flex gap-2 m-2 items-end border-b pb-2">
                        <div className="flex flex-col">
                            <label>City Name</label>
                            <input
                                type="text"
                                className="border p-1"
                                value={city.name}
                                onChange={(e) => handleChange(index, "name", e.target.value)}
                            />
                        </div>

                        <div className="flex flex-col">
                            <label>State/Province</label>
                            <input
                                type="text"
                                className="border p-1"
                                value={city.state_province}
                                onChange={(e) => handleChange(index, "state_province", e.target.value)}
                            />
                        </div>

                        <div className="flex flex-col">
                            <label>Country</label>
                            <select
                                className="border p-1"
                                onChange={(e) => handleCountryChange(index, parseInt(e.target.value))}
                            >
                                <option value="">Select</option>
                                {countries.map((country) => (
                                    <option key={country.id} value={country.id}>
                                        {country.name}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </div>
                ))}

                <div className="flex justify-between items-center mt-4">
                    <button type="button" onClick={addCity} className="bg-amber-300 p-2">
                        Add More Cities
                    </button>
                    <button type="submit" className="bg-green-600 text-white p-2 rounded">
                        Submit Cities
                    </button>
                </div>
            </form>
        </Modal>
    );
}

export default AddCitiesModal;