type VisaStatus = {
    id: number;
    status: string;
    notes: string;
    passport: {
        name: string;
        flag: string;
    };
    destination: {
        name: string;
        flag: string;
    }
}

export default VisaStatus;