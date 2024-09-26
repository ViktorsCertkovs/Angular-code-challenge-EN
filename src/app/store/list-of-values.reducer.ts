import { createReducer, on } from '@ngrx/store';
import {
  loadVehicleTypes,
  loadAutoSubtype,
  loadMotoSubtype,
} from './list-of-values.action';
import { ListOfValuesState } from '../interfaces/list-of-values';

export const initialState: ListOfValuesState = {
  vehicleTypes: [],
  autoSubtypes: [],
  motoSubtypes: [],
};

export const listOfValuesReducer = createReducer(
  initialState,
  on(loadVehicleTypes, (state, { vehicleTypes }) => ({
    ...state,
    vehicleTypes,
  })),
  on(loadAutoSubtype, (state, { autoSubtypes }) => ({
    ...state,
    autoSubtypes,
  })),
  on(loadMotoSubtype, (state, { motoSubtypes }) => ({
    ...state,
    motoSubtypes,
  }))
);
