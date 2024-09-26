import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { addVehicleInfo } from './vehicle-info.action';
import { Store } from '@ngrx/store';
import { exhaustMap, tap } from 'rxjs/operators';
import { selectAllVehicleInfo } from './vehicle-info.selector';

@Injectable()
export class VehicleInfoEffects {
  constructor(private actions$: Actions, private store: Store) {}

  logVehicleInfo$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(addVehicleInfo),
        exhaustMap(() =>
          this.store.select(selectAllVehicleInfo).pipe(
            tap((vehicleInfo) => {
              console.log('Vehicle Info Store:', vehicleInfo);
            })
          )
        )
      ),
    { dispatch: false }
  );
}
