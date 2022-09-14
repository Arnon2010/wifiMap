export interface Univ {
    univ_id: Number;
    univ_name: string; 

  }

export interface Fac {
    fac_id: Number;
    fac_name: string; 

  }

export interface DataTableUniv {
    building_name: string,
    upCount: number,
    downCount: number,
    deviceCount: number,
  }

export interface TotalDataUniv {
    total_up: string,
    total_down: string,
    total_device: string,
  }