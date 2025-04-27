import {useEffect, useState} from "react";
import axios from "axios";
import Modal from "../../components/Modal.tsx";
import {VisaStatus} from "../../models";

interface EditVisaModalProps {
    isOpen: boolean;
    onClose: () => void;
    visa: VisaStatus;
    onSave: () => void;
}

export default function EditVisaModal({ isOpen, onClose, visa, onSave }: EditVisaModalProps) {
    const [newStatus, setNewStatus] = useState(visa.status);
    const [newNotes, setNotes] = useState(visa.notes);

    useEffect(() => {
        setNewStatus(visa.status);
        setNotes(visa.notes);
    }, [visa]);

    const handleSave = async () => {
        try {
            const res = await axios.put(`https://ariventures-data.vercel.app/visas/update-status/${visa.id}`, {
                status: newStatus,
                notes: newNotes,
            });
            console.log(res.data);
            onSave();
            onClose();
        } catch (error) {
            console.error("Failed to update visa status:", error);
        }
    };

    return (
        <Modal isOpen={isOpen} onClose={onClose} title={`Visa ID: ${visa.id}`}>
            <div className="flex flex-col gap-4">
                <div className="flex flex-col">
                    <label className="font-medium mb-1">Status:</label>
                    <select
                        value={newStatus}
                        onChange={(e) => setNewStatus(e.target.value)}
                        className="border p-2 rounded"
                    >
                        <option value="VISA_FREE">Visa Free</option>
                        <option value="VISA_REQUIRED">Visa Required</option>
                    </select>
                </div>

                <div className="flex flex-col">
                    <label className="font-medium mb-1">Notes:</label>
                    <textarea
                        value={newNotes}
                        onChange={(e) => setNotes(e.target.value)}
                        className="border p-2 rounded w-full h-24 resize-none"
                    />
                </div>

                <div className="flex justify-end gap-2 mt-4">
                    <button className="bg-gray-300 px-4 py-2 rounded" onClick={onClose}>Cancel</button>
                    <button className="bg-blue-600 text-white px-4 py-2 rounded" onClick={handleSave}>Save</button>
                </div>
            </div>
        </Modal>
    );
}