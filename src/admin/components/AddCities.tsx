import Modal from "../../components/Modal.tsx";
import {JSX, useState} from "react";
import {Country} from "../../models/Country.ts";

interface AddCityModalProps {
    isOpen: boolean;
    onClose: () => void;
    countries: Country[];
}

    function AddCitiesModal({ isOpen, onClose, countries}: AddCityModalProps) {

        const newCityFormElement: JSX.Element = (
            <div className="flex gap-2 m-2">
                <label>City Name</label>
                <input type="text" className="border-1"/>
                <label>State/Province</label>
                <input type="text" className="border-1"/>
                <label>Country</label>
                <select>
                    {countries.map((country) => (
                        <option key={country.id} value={country.id}>{country.name}</option>
                    ))}
                </select>

            </div>
            )

        const [formElements, setFormElements] = useState<JSX.Element[]>([newCityFormElement]);

        const addElement = () => {
            setFormElements([...formElements, newCityFormElement]);
        }
        return (
        <Modal isOpen={isOpen} onClose={onClose} width="w-2/3">
            <div>
                <form>
                    {formElements.map((formElement, index) => (
                        <div key={index}>{formElement}</div>
                    ))}

                </form>
                <button className="bg-amber-300 m-2 p-2" onClick={addElement}>Add More Cities</button>
            </div>
        </Modal>
    )
}

export default AddCitiesModal;