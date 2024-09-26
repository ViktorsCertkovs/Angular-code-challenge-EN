import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { forkJoin, map, take } from 'rxjs';
import { ListOfValuesItem } from '../interfaces/list-of-values';

@Injectable({
  providedIn: 'root',
})
export class ListOfValuesService {
  constructor(private http: HttpClient) {}

  public getAllListsOfValues() {
    return forkJoin([
      this.http.get('/assets/mocks/vehicle-type.json').pipe(take(1)),
      this.http.get('/assets/mocks/auto-subtype.json').pipe(take(1)),
      this.http.get('/assets/mocks/moto-subtype.json').pipe(take(1)),
    ]).pipe(
      take(1),
      map(([vehicleTypes, autoSubtypes, motoSubtypes]) => {
        return [
          vehicleTypes as ListOfValuesItem[],
          autoSubtypes as ListOfValuesItem[],
          motoSubtypes as ListOfValuesItem[],
        ];
      })
    );
  }
}
