import { Component, Input, OnInit } from '@angular/core';
import {
  ControlContainer,
  FormGroupDirective,
  FormGroup,
  FormControl,
} from '@angular/forms';
import { ListOfValuesItem } from 'src/app/interfaces/list-of-values';

@Component({
  selector: 'app-input-select',
  templateUrl: './input-select.component.html',
  viewProviders: [
    {
      provide: ControlContainer,
      useExisting: FormGroupDirective,
    },
  ],
})
export class InputSelectComponent implements OnInit {
  @Input()
  label: string = '';
  @Input()
  listOfValues: ListOfValuesItem[] = [];
  @Input()
  name: string = '';

  constructor(private f: FormGroupDirective) {}

  private get _formGroup(): FormGroup {
    return this.f?.form ?? undefined;
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
}
