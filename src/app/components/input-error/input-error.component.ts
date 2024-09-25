import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'app-input-error',
  templateUrl: './input-error.component.html',
})
export class InputErrorComponent implements OnInit {
  @Input()
  label!: string;
  @Input()
  text!: string;

  constructor() {}

  ngOnInit(): void {}
}
