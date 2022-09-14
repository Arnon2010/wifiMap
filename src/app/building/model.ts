export interface UNIV {
    univ_id: Number;
    univ_local: string;
    univ_name: string;
  }
  
  export interface Fac {
    fac_name: string;
    fac_id: Number;
    univ_id: Number;
    univ_name: string;
    fac_status: string;
  }
  
  export interface Building {
    building_id: Number;
    building_name: string;
    building_status: string;
    fac_id: Number;
    fac_name: String;
  }
  
  export interface NewBuilding {
    building_name: string;
    fac_id: Number;
  }
  