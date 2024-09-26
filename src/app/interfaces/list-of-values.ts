export interface ListOfValuesItem {
  id: string;
  value: string;
}

export interface ListOfValuesState {
  vehicleTypes: ListOfValuesItem[];
  autoSubtypes: ListOfValuesItem[];
  motoSubtypes: ListOfValuesItem[];
}
