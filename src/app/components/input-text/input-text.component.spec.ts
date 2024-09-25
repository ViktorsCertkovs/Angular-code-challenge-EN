import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputTextComponent } from './input-text.component';
import {
  FormControl,
  FormGroup,
  FormGroupDirective,
  ReactiveFormsModule,
} from '@angular/forms';

describe('InputTextComponent', () => {
  let component: InputTextComponent;
  let fixture: ComponentFixture<InputTextComponent>;

  beforeEach(async () => {
    const form: FormGroup = new FormGroup({
      control: new FormControl(''),
    });

    const directive: FormGroupDirective = new FormGroupDirective([], []);
    directive.form = form;

    await TestBed.configureTestingModule({
      imports: [ReactiveFormsModule],
      declarations: [InputTextComponent],
      providers: [{ provide: FormGroupDirective, useValue: directive }],
    }).compileComponents();

    fixture = TestBed.createComponent(InputTextComponent);
    component = fixture.componentInstance;
    component.name = 'control';

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
