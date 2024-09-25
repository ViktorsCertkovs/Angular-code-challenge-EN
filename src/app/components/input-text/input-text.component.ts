import { Component, Input, OnInit } from '@angular/core';
import {
  ControlContainer,
  FormControl,
  FormGroup,
  FormGroupDirective,
} from '@angular/forms';

@Component({
  selector: 'app-input-text',
  templateUrl: './input-text.component.html',
  viewProviders: [
    {
      provide: ControlContainer,
      useExisting: FormGroupDirective,
    },
  ],
})
export class InputTextComponent implements OnInit {
  @Input() label!: string;
  @Input() placeholder!: string;
  @Input() name: string = '';

  constructor(private f: FormGroupDirective) {}

  private get _formGroup(): FormGroup {
    return this.f?.form ?? undefined;
  }

  private get _formControl(): FormControl {
    return this._formGroup.get(this.name) as FormControl;
  }

  ngOnInit(): void {
    if (!this._formGroup) {
      throw new Error(
        'FormGroup is required. Make sure formGroup directive is used outside of this component.'
      );
    }

    if (!this.name || !this._formGroup.get(this.name)) {
      throw new Error(
        'FormControl is required. Make sure there is correct contorl name.'
      );
    }
  }

  public isInvalid(): boolean {
    return (
      this._formControl.dirty &&
      this._formControl.touched &&
      !!this._formControl.errors
    );
  }
}
