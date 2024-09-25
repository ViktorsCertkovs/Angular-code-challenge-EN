import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputSelectComponent } from './input-select.component';
import {
  FormGroup,
  FormControl,
  FormGroupDirective,
  ReactiveFormsModule,
} from '@angular/forms';

describe('InputSelectComponent', () => {
  let component: InputSelectComponent;
  let fixture: ComponentFixture<InputSelectComponent>;

  beforeEach(async () => {
    const form: FormGroup = new FormGroup({
      control: new FormControl(''),
    });

    const directive: FormGroupDirective = new FormGroupDirective([], []);
    directive.form = form;

    await TestBed.configureTestingModule({
      imports: [ReactiveFormsModule],
      declarations: [InputSelectComponent],
      providers: [{ provide: FormGroupDirective, useValue: directive }],
    }).compileComponents();

    fixture = TestBed.createComponent(InputSelectComponent);
    component = fixture.componentInstance;
    component.name = 'control';

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
