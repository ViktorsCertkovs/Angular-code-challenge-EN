import { createSelector, createFeatureSelector } from '@ngrx/store';
import { ListOfValuesState } from '../interfaces/list-of-values';

export const selectListOfValuesState =
  createFeatureSelector<ListOfValuesState>('listOfValues');

export const selectVehicleTypes = createSelector(
  selectListOfValuesState,
  (state: ListOfValuesState) => state.vehicleTypes
);

export const selectAutoSubtypes = createSelector(
  selectListOfValuesState,
  (state: ListOfValuesState) => state.autoSubtypes
);

export const selectMotoSubtypes = createSelector(
  selectListOfValuesState,
  (state: ListOfValuesState) => state.motoSubtypes
);
