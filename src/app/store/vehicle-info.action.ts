import { createAction, props } from '@ngrx/store';
import { VehicleInfo } from '../interfaces/vehicle-info';

export const addVehicleInfo = createAction(
  '[Vehicle Info] Add Vehicle Info',
  props<{ vehicleInfo: VehicleInfo }>()
);
