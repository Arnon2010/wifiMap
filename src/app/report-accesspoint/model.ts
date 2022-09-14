export interface Univ {
    univ_id: Number;
    univ_name: string; 
  }

export interface Fac {
    fac_id: Number;
    fac_name: string; 
  }

export interface Building {
    building_id: Number;
    building_name: string; 
  }

export interface DataTableUniv {
    building_name: string,
    upCount: number,
    downCount: number,
    deviceCount: number,
  }

export interface DataTableAccess {
    access_name: string,
    floor: string,
    statusUpDown: string,
    userAccess: number,
    capAccess: any,
  }