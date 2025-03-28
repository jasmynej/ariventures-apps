type Country = {
    id: number;
    name: string;
    capital: string;
    region: string;
    sub_region: string;
    flag_img: string;
}

const getEmptyCountry = (): Country => ({
    id: 0,
    name: "",
    capital: "",
    region: "",
    sub_region: "",
    flag_img: "",
});

export {getEmptyCountry};
export type { Country };
