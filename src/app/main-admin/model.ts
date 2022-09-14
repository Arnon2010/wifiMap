export interface AP {
  id: string;
  apMac: string;
  apName: string;
  apLocation: string;
  remark: string;
  lat: string;
  lng: string;
  status: string;
  statusChangeTime: string;
  controller: string;
  totalUser: string;
  ssid1User: string;
  ssid2User: string;
  ssid3User: string;
  ssid4User: string;
  ssid5User: string;
  ssid6User: string;
  upCount: string;
  totalCount: string;
  channelLoad2: string;
  interference2: string;
  channelUser2: string;
  channelLoad5: string;
  interference5: string;
  channelUser5: string;
}

export interface BuildingDetail {
  access_name: string;
  building_id: Number;
  building_name: string;
  fac_name: string;
  univ_name: string;
}
