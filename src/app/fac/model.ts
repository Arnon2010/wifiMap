  
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
  
  export interface NewFac {
    fac_name: string;
    univ_id: Number;
  }
  