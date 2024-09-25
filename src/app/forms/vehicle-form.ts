import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  ValidationErrors,
  Validators,
} from '@angular/forms';
import { KentekenCheck } from 'rdw-kenteken-check';

export class VehicleForm {
  static getForm(fb: FormBuilder): FormGroup {
    return fb.group({
      vehicleType: ['', Validators.required],
      vehicleSubtype: ['', VehicleForm.optionalRequired],
      kenteken: [
        '',
        {
          validators: [Validators.required, VehicleForm.licensePlateValidator],
          updateOn: 'blur',
        },
      ],
    });
  }

  private static optionalRequired(
    control: AbstractControl
  ): ValidationErrors | null {
    const form = control.root as FormGroup;
    const vehicleTypeValue = form.get('vehicleType')?.value;

    if (vehicleTypeValue === '3') {
      return null;
    } else {
      return Validators.required(control);
    }
  }

  private static licensePlateValidator(
    control: AbstractControl
  ): ValidationErrors | null {
    const kc = new KentekenCheck(control.value);

    // Updates validity and checks against forbidden characters
    kc.showLicense(control.value);

    return kc.valid ? null : { invalidLicensePlate: { value: control.value } };
  }
}
