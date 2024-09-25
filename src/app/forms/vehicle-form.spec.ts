import { FormBuilder, FormGroup } from '@angular/forms';
import { VehicleForm } from './vehicle-form';

describe('VehicleForm', () => {
  let fb: FormBuilder = new FormBuilder();
  let form: FormGroup;

  beforeEach(() => {
    form = VehicleForm.getForm(fb);
  });

  it('should create', () => {
    expect(form).toBeTruthy();
    expect(form.contains('vehicleType')).toBeTruthy();
    expect(form.contains('vehicleSubtype')).toBeTruthy();
    expect(form.contains('kenteken')).toBeTruthy();
  });

  it('should set vehicleType as required', () => {
    const vehicleTypeControl = form.get('vehicleType');

    vehicleTypeControl?.setValue('');
    expect(vehicleTypeControl?.valid).toBeFalsy();

    vehicleTypeControl?.setValue('1');
    expect(vehicleTypeControl?.valid).toBeTruthy();
  });

  it('should handle vehicleSubtype optionality', () => {
    const vehicleTypeControl = form.get('vehicleType');
    const vehicleSubtypeControl = form.get('vehicleSubtype');

    vehicleTypeControl?.setValue('1');
    vehicleSubtypeControl?.setValue('');
    vehicleSubtypeControl?.updateValueAndValidity();
    expect(vehicleSubtypeControl?.valid).toBeFalsy();

    vehicleTypeControl?.setValue('3');
    vehicleSubtypeControl?.updateValueAndValidity();
    expect(vehicleSubtypeControl?.valid).toBeTruthy();
  });
});
