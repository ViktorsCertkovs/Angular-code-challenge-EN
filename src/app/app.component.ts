import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { VehicleForm } from './forms/vehicle-form';
import { ListOfValuesItem } from './interfaces/list-of-values';
import { ListOfValuesService } from './services/list-of-values.service';
import { Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import {
  loadVehicleTypes,
  loadAutoSubtype,
  loadMotoSubtype,
} from './store/list-of-values.action';
import {
  selectVehicleTypes,
  selectAutoSubtypes,
  selectMotoSubtypes,
} from './store/list-of-values.selector';
import { addVehicleInfo } from './store/vehicle-info.action';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  public form: FormGroup = VehicleForm.getForm(this.fb);
  public isFormValid = true;
  public pictureUrl = '';

  public vehicleTypes$: Observable<ListOfValuesItem[]> =
    this.store.select(selectVehicleTypes);
  public autoSubtypes$: Observable<ListOfValuesItem[]> =
    this.store.select(selectAutoSubtypes);
  public motoSubtypes$: Observable<ListOfValuesItem[]> =
    this.store.select(selectMotoSubtypes);

  constructor(
    private fb: FormBuilder,
    private lovService: ListOfValuesService,
    private store: Store
  ) {}

  ngOnInit(): void {
    // Load list of values
    this.lovService
      .getAllListsOfValues()
      .subscribe(([vehicleTypes, autoSubtypes, motoSubtypes]) => {
        this.store.dispatch(loadVehicleTypes({ vehicleTypes }));
        this.store.dispatch(loadAutoSubtype({ autoSubtypes }));
        this.store.dispatch(loadMotoSubtype({ motoSubtypes }));
      });

    // Listen to vehicle type changes in order to set the picture URL and default subtype
    this.form.get('vehicleType')?.valueChanges.subscribe((value) => {
      if (value === '3') {
        this.form.get('vehicleSubtype')?.setValue('');
      }
      this.setPictureUrl(value);
    });
  }

  public getVehicleSubtypes(): Observable<ListOfValuesItem[]> {
    const vehicleType = this.form.get('vehicleType')?.value;
    if (vehicleType === '1') {
      return this.autoSubtypes$;
    } else if (vehicleType === '2') {
      return this.motoSubtypes$;
    }
    return of([]);
  }

  public submitForm() {
    this.form.updateValueAndValidity();
    this.isFormValid = this.form.valid;

    if (this.isFormValid) {
      this.store.dispatch(addVehicleInfo({ vehicleInfo: this.form.value }));
    }
  }

  public isSubtypeVisible(): boolean {
    return this.form.get('vehicleType')?.value !== '3';
  }

  public setPictureUrl(vehicleType: string): void {
    switch (vehicleType) {
      case '1':
        this.pictureUrl = './assets/auto.jpg';
        break;
      case '2':
        this.pictureUrl = './assets/motor.jpg';
        break;
      case '3':
        this.pictureUrl = './assets/scooter.jpg';
        break;
      default:
        this.pictureUrl = './assets/auto.jpg';
        break;
    }
  }
}
