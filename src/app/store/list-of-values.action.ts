import { createAction, props } from '@ngrx/store';
import { ListOfValuesItem } from '../interfaces/list-of-values';

export const loadVehicleTypes = createAction(
  '[List Of Values] Load Vehicles Types',
  props<{ vehicleTypes: ListOfValuesItem[] }>()
);

export const loadAutoSubtype = createAction(
  '[List Of Values] Load Auto Subtypes',
  props<{ autoSubtypes: ListOfValuesItem[] }>()
);

export const loadMotoSubtype = createAction(
  '[List Of Values] Load Moto Subtypes',
  props<{ motoSubtypes: ListOfValuesItem[] }>()
);
