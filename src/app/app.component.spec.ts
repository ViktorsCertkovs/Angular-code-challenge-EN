import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { FormBuilder } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [AppComponent],
      providers: [{ provide: FormBuilder, useValue: new FormBuilder() }],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
