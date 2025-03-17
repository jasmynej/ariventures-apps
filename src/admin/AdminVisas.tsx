import {useEffect, useState} from "react";
import axios from "axios";
import VisaStatus from "../models/Visas.ts";
import "./styles/visas.css"
import {PencilSquareIcon, TrashIcon, ArrowLongRightIcon, ArrowLongLeftIcon} from "@heroicons/react/24/outline";
import EditVisaModal from "./components/EditVisaModal.tsx";

function AdminVisas() {
    const emptyStatus = {
        id: 0,
        status: "",
        notes: "",
        passport: { name: "", flag: "" },
        destination: { name: "", flag: "" }
    }
    const [visaData, setVisaData] = useState<VisaStatus[]>([]);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedVisa, setSelectedVisa] = useState<VisaStatus>(emptyStatus);


    const getVisas = () => {

        axios.get(`https://ariventures-data.vercel.app/visas/all-status?page=${page}&includeNulls=false`)
            .then((res) => {
                setVisaData(res.data.data)
                setTotalPages(res.data.totalPages)

            })
    }

    const changePage = (page: number) => {
        if(page < 1 || page > totalPages) {
            page = 1;
        }

        setPage(page);
    }

    const openEditModal = (visa: VisaStatus) => {
        console.log(visa)
        setSelectedVisa(visa);
        setIsModalOpen(true);
    };

    const closeEditModal = () => {
        setIsModalOpen(false);
        setSelectedVisa(emptyStatus);
    };


    useEffect(() => {
        getVisas()
    }, [page]);
    return (
        <main className="p-5">
            <div className="w-full p-2 flex gap-2 items-center justify-center">
                <button onClick={() => changePage(page-1)}><ArrowLongLeftIcon className="w-5"/></button>
                <p>Page: {page}</p>
                <button onClick={() => changePage(page+1)}><ArrowLongRightIcon className="w-5"/></button>
            </div>
            <table className="border">
                <thead className="text-left">
                    <th className="px-4 py-2 border border-black">Passport</th>
                    <th className="px-4 py-2 border border-black">Destination</th>
                    <th className="px-4 py-2 border border-black">Status</th>
                    <th className="px-4 py-2 border border-black">Notes</th>
                    <th className="px-4 py-2 border border-black">Actions</th>
                </thead>
                <tbody>
                {visaData.map((visa) => (
                    <tr className="border-b">
                        <td className="border-r p-4">{visa.passport.name}</td>
                        <td className="border-r p-4">{visa.destination.name}</td>
                        <td className="border-r p-4">{visa.status}</td>
                        <td className="border-r p-4">{visa.notes}</td>
                        <td>
                            <div className="gap-1 m-2 flex">
                                <button
                                    className="p-2 m-2 bg-amber-200 hover:bg-amber-400 ease-in-out"
                                    onClick={() => openEditModal(visa)}>
                                    <PencilSquareIcon className="w-4"/>
                                </button>
                                <button className="p-2 m-2 bg-red-200 hover:bg-red-400"><TrashIcon className="w-4"/></button>
                            </div>
                        </td>
                    </tr>
                ))}
                </tbody>

            </table>
            <div className="w-full p-2 flex gap-2 items-center justify-center">
                <button onClick={() => changePage(page-1)}><ArrowLongLeftIcon className="w-5"/></button>
                <p>Cur Page: {page}</p>
                <button onClick={() => changePage(page+1)}><ArrowLongRightIcon className="w-5"/></button>
            </div>
            <EditVisaModal isOpen={isModalOpen} onClose={closeEditModal} visa={selectedVisa} onSave={getVisas} />
        </main>
    )
}

export default AdminVisas;