import {useState} from "react";
import axios from "axios";
import Modal from "../../components/Modal.tsx";
import City from "../../models/City.ts";
import * as React from "react";

interface CityDetailsModalProps {
    city: City;
    isOpen: boolean;
    onClose: () => void;
    onSave: () => void;
}

export default function CityDetailsModal({ isOpen, onClose, city, onSave }: CityDetailsModalProps) {

    const [showImgUploadForm, setShowImgUploadForm] = useState(false);
    const uploadFile = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const input = document.getElementById("cityImage") as HTMLInputElement;
        const file = input?.files?.[0];

        if (file) {
            const formData = new FormData();
            formData.append("cityImage", file);
            axios.post(`https://ariventures-data.vercel.app/images/city?id=${city.id}`, formData)
                .then(res => {
                    console.log(res.data);
                })
                .catch(err => {
                    console.log(err);
                })
        }


    }
    return (
        <Modal isOpen={isOpen} onClose={onClose} title={`${city.name}, ${city.country.name}`}>
            <div>
                {
                    city.images.map((image) => (
                        <img src={image.url} alt={`${city.name}`} />
                    ))
                }

                <button className="bg-green-300 p-2 m-2" onClick={() => setShowImgUploadForm(!showImgUploadForm)}>Upload Images</button>
                <button onClick={onSave} className="bg-yellow-300 p-2 m-2">Save edits</button>

                { showImgUploadForm && (
                    <div>

                        <form onSubmit={(e) => uploadFile(e)}>
                            <input type="file" id="cityImage"/>
                            <button className="bg-blue-200 m-2 p-2">Upload</button>
                        </form>
                    </div>
                )}
            </div>
        </Modal>
    )
}