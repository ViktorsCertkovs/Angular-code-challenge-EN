import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { VehicleForm } from './forms/vehicle-form';
import { HttpClient } from '@angular/common/http';
import { forkJoin, map, take } from 'rxjs';
import { ListOfValuesItem } from './interfaces/list-of-values';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  public form: FormGroup = VehicleForm.getForm(this.fb);
  public isFormValid = true;
  public pictureUrl = '';

  public vehicleTypes: ListOfValuesItem[] = [];
  public autoSubtypes: ListOfValuesItem[] = [];
  public motorcycleSubtypes: ListOfValuesItem[] = [];

  constructor(private fb: FormBuilder, private http: HttpClient) {}

  ngOnInit(): void {
    // Load list of values
    forkJoin([
      this.http.get('/assets/mocks/vehicle-type.json').pipe(take(1)),
      this.http.get('/assets/mocks/auto-subtype.json').pipe(take(1)),
      this.http.get('/assets/mocks/motorcycle-subtype.json').pipe(take(1)),
    ])
      .pipe(
        take(1),
        map(([vehicleTypes, autoSubtypes, motorcycleSubtypes]) => {
          return [
            vehicleTypes as ListOfValuesItem[],
            autoSubtypes as ListOfValuesItem[],
            motorcycleSubtypes as ListOfValuesItem[],
          ];
        })
      )
      .subscribe(([vehicleTypes, autoSubtypes, motorcycleSubtypes]) => {
        this.vehicleTypes = vehicleTypes;
        this.autoSubtypes = autoSubtypes;
        this.motorcycleSubtypes = motorcycleSubtypes;

        // Set defaults to the form
        this.form.get('vehicleType')?.setValue(vehicleTypes[0]?.id ?? '');
        this.form.get('vehicleSubtype')?.setValue(autoSubtypes[0]?.id ?? '');
      });

    // Listen to vehicle type changes in order to set the picture URL and default subtype
    this.form.get('vehicleType')?.valueChanges.subscribe((value) => {
      const vehicleSubtypeCtrl = this.form.get('vehicleSubtype');

      this.setPictureUrl(value);

      if (value === '1') {
        vehicleSubtypeCtrl?.setValue(this.autoSubtypes[0]?.id ?? '');
      } else if (value === '2') {
        vehicleSubtypeCtrl?.setValue(this.motorcycleSubtypes[0]?.id ?? '');
      } else {
        vehicleSubtypeCtrl?.setValue('');
      }
    });
  }

  public getVehicleSubtypes(): ListOfValuesItem[] {
    const vehicleType = this.form.get('vehicleType')?.value;
    if (vehicleType === '1') {
      return this.autoSubtypes;
    } else if (vehicleType === '2') {
      return this.motorcycleSubtypes;
    }
    return [];
  }

  public submitForm() {
    this.form.updateValueAndValidity();
    this.isFormValid = this.form.valid;
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
