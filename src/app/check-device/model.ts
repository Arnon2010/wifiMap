export interface CheckDevice {
  id: Number;
  apName: string;
  apMac: string;
  status: String;
  univ_name: string;
  fac_name: string;
  building_name: string;
  floor: string;
}

export interface UpDevice {
  access_id: Number;
  up_time: string;
}

export interface DownDevice {
  access_id: Number;
  down_time: string;
  updown_cause: string;
  updown_solutions: string;
}
