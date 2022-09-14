export interface ACT {
    access_type_id: string,
    access_type_name: string
}

export interface UNIV {
    univ_id: string;
    univ_name: string;
}

export interface FAC {
    fac_name: string;
    fac_id: string;
}

export interface Building {
    building_id: string;
    building_name: string;
}

export interface NewDevice {
    access_name: string,
    short_name: string,
    access_mac: string,
    access_serial: string,
    building_id: Number,
    floor: string,
    access_gen: string,
    access_room: string,
    access_brand: string,
    access_budget: string,
    access_budgetno: string,
    access_no: string,
    access_type_id: Number,
    access_budgetuse: string,
    fac_id: Number,
    univ_id: Number,
}

export interface AC {
    access_id: string,
    access_name: string,
    building_name: string,
    access_serail: string,
    univ_name: string,
    floor: string,
    access_type_name: string,
    access_status: string,
    fac_name: string,
    access_mac: string,
    access_no: string,
    short_name: string,
    building_id: Number,
    access_room: string,
    access_brand: string,
    access_gen: string,
    access_budget: string,
    access_budgetuse: string,
    access_budgetno: string,
    access_type_id: Number,
    univ_id: Number,
    fac_id: Number,
}

export interface UPAC {
    access_id: string,
    access_name: string,
    short_name: string,
    access_mac:string,
    access_serail:string,
    building_id:string,
    floor:string,
    access_room:string,
    access_brand: string,
    access_gen: string,
    access_budget: string,
    access_budgetuse: string,
    access_budgetno: string,
    access_no:string,
    access_type_id:string,
    aceess_status:string,
    access_datemodified:string,
    fac_id:string,
    univ_id:string
}