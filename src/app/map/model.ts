export interface SSID {
  id: Number;
  ssidName: string;
  color: string;
}

export interface UNIV {
  univ_id: Number;
  univ_local: string;
  univ_name: string;
}

export interface User {
  username: string;
  role: string;
  ssidId: Number;
  ssidName: string;
  color: string;
  univ_name: string;
  univ_local: Number;
}

export interface NewUser {
  name: string;
  passwd: string;
  role: string;
  univ_id: Number;
  ssidId: Number;
}
