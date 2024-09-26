export interface VehicleInfo {
  vehicleType: string;
  vehicleSubtype?: string;
  kenteken: string;
}

export interface VehicleInfoState {
  vehicleInfo: VehicleInfo[];
}
