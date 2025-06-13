
import axios from "axios";
import Modal from "../../components/Modal.tsx";
import {Country} from "../../models";
import * as React from "react";
import {useEffect, useState} from "react";

interface EditCountryProps {
    country: Country;
    isOpen: boolean;
    onClose: () => void;
}

export default function EditCountryModal({country, isOpen, onClose}: EditCountryProps) {
    const [localCountry, setLocalCountry] = useState<Country>(country);

    // Keep local copy in sync if prop changes
    useEffect(() => {
        setLocalCountry(country);
    }, [country]);


    const editCountry = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const input = document.getElementById("countryImage") as HTMLInputElement;
        const file = input?.files?.[0];

        if (file) {
            const formData = new FormData();
            formData.append("countryImage", file);
            axios.post(`https://ariventures-data.vercel.app/images/country?id=${country.id}`, formData)
                .then(res => {
                    const updatedCountry = res.data[0] as Country;
                    console.log(updatedCountry);
                    setLocalCountry(updatedCountry);
                })
                .catch(err => {
                    console.log(err);
                })
        }


    }

    return (
        <Modal isOpen={isOpen} onClose={onClose} title={`Edit ${localCountry.name}`}>
            <div>
                <div>
                    <img src={localCountry.img} alt={localCountry.name} />
                </div>
                <form onSubmit={(e) => editCountry(e)}>
                    <input type="file" id="countryImage"/>
                    <button className="bg-blue-200 m-2 p-2">Edit</button>
                </form>

            </div>
        </Modal>
    )
}