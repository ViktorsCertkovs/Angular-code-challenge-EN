import { createFeatureSelector, createSelector } from '@ngrx/store';
import { VehicleInfoState } from '../interfaces/vehicle-info';

export const selectVehicleInfoState =
  createFeatureSelector<VehicleInfoState>('vehicleInfo');

// Create a selector to get the list of vehicle info objects
export const selectAllVehicleInfo = createSelector(
  selectVehicleInfoState,
  (state: VehicleInfoState) => {
    return state.vehicleInfo;
  }
);
