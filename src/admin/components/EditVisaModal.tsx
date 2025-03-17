import { useState } from "react";
import axios from "axios";
import VisaStatus from "../../models/Visas.ts";

interface EditVisaModalProps {
    isOpen: boolean;
    onClose: () => void;
    visa: VisaStatus;
    onSave: () => void;
}

export default function EditVisaModal({ isOpen, onClose, visa, onSave }: EditVisaModalProps) {
    const [newStatus, setNewStatus] = useState(visa.status);
    const [newNotes, setNotes] = useState(visa.notes);
    if (!isOpen) return null;

    const handleSave = async () => {
        try {
            console.log(newNotes);
            console.log(newStatus);
           const res =  await axios.put(`https://ariventures-data.vercel.app/visas/update-status/${visa.id}`, {
                status: newStatus,
                notes: newNotes,
            });
           console.log(res)
           console.log(res.data);
            onSave(); // Refresh data
            onClose(); // Close modal
        } catch (error) {
            console.error("Failed to update visa status:", error);
        }
    };

    return (
        <div className="fixed inset-0 bg-gray-100/75  flex justify-center items-center">
            <div className="bg-white p-6 rounded-lg shadow-lg w-1/3">
                <h2 className="text-xl font-semibold mb-4">Visa ID: {visa.id}</h2>
                <p>{newStatus}</p>
                <div className="flex items-center gap-2 m-2">

                    <label className="block mb-2">Status:</label>
                    <select className="border p-2" onChange={e => setNewStatus(e.target.value)}>
                        <option value="VISA_FREE">Visa Free</option>
                        <option value="VISA_REQUIRED">Visa Required</option>
                    </select>
                </div>
                <div className="flex items-center gap-2 m-2">
                    <label className="block mb-2">Notes:</label>
                    <textarea
                    value={visa.notes}
                    onChange={(e) => setNotes(e.target.value)}
                    className="border p-2 w-full h-24 resize-none" />
                </div>


                <div className="mt-4 flex justify-end gap-2">
                    <button className="bg-gray-300 p-2 rounded" onClick={onClose}>Cancel</button>
                    <button className="bg-blue-500 text-white p-2 rounded" onClick={handleSave}>Save</button>
                </div>
            </div>
        </div>
    );
}