import { createReducer, on } from '@ngrx/store';
import { addVehicleInfo } from './vehicle-info.action';
import { VehicleInfoState } from '../interfaces/vehicle-info';

const initialState: VehicleInfoState = {
  vehicleInfo: [],
};

export const vehicleInfoReducer = createReducer(
  initialState,
  on(addVehicleInfo, (state, { vehicleInfo }) => {
    const newState = { vehicleInfo: [...state.vehicleInfo, vehicleInfo] };
    return newState;
  })
);
