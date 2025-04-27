import {CountryPicker, Header} from "../components";
import {useVisaStore} from "../store/visaCheckerStore.ts";
import PassportPicker from "../components/PassportPicker.tsx";
import * as React from "react";
import {getVisaStatus} from "../services/countryService.ts";
import {formatEnum} from "../services/utils.ts";
import '../styles/visas.css'
import {VisaStatus} from "../models";

function VisaStatusChecker() {
    const {
        destination,
        passport,
        visaStatus,
        setVisaStatus
    } = useVisaStore();
    const emptyStatus: VisaStatus = {
        id: 0,
        status: "",
        notes: "",
        passport: { name: "", flag: "" },
        destination: { name: "", flag: "" }
    };

    const handleVisaStatusClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        getVisaStatus(passport.id, destination.id)
            .then((res) => {
                console.log(res);
                if(res[0].status === null){
                    setVisaStatus(emptyStatus)
                }
                else {
                    setVisaStatus(res[0]);
                }

            })
            .catch((err) => {
                console.error(err);
            });
    };

    return (
        <div className="w-screen h-screen flex flex-col  items-center">
            <Header/>
            <div className="w-2/3 flex flex-col justify-center items-center m-5">
                <PassportPicker/>
                <CountryPicker/>
                <div className="grid grid-cols-2 gap-4 w-2/5 m-2 place-items-center">
                    <p className="text-xl">Departing</p>
                    <div className="flex gap-2 items-center">
                        <img src={passport.flag_img} alt={passport.name} className="w-12"/>
                        <p>{passport.name}</p>
                    </div>
                    <p className="text-xl">Arriving</p>
                    <div className="flex gap-2 items-center">
                        <img src={destination.flag_img} alt={destination.name} className="w-12"/>
                        {destination.name}
                    </div>
                </div>
                <button onClick={handleVisaStatusClick} className="bg-green-600 p-2 m-2">Check Status</button>
                {visaStatus.status === "" ? <p className="text-red-500">No status found</p> : (
                    <div className="flex justify-center items-center p-4 w-full">
                        <div className="status text-center w-full max-w-md p-4 rounded" id={visaStatus.status.toLowerCase()}>
                            <h2 className="text-2xl sm:text-3xl font-semibold">{formatEnum(visaStatus.status)}</h2>
                            <p className="text-lg sm:text-2xl font-light">{visaStatus.notes}</p>
                        </div>
                    </div>
                )}

            </div>

        </div>
    )
}

export default VisaStatusChecker;