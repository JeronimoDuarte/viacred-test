import { Component, ContentChild, Input, OnInit } from '@angular/core';
import { FormControlName, NgModel } from '@angular/forms';

@Component({
  selector: 'input-validat',
  templateUrl: './input-validate.component.html',
  styleUrls: ['./input-validate.component.css']
})
export class InputValidateComponent implements OnInit {

  @Input()
  label!: string;
  @Input()
  errorMessage!: string;

  input: any;

  @ContentChild(NgModel, { static: false })
  model!: NgModel;
  @ContentChild(FormControlName, { static: false })
  control!: FormControlName;

  constructor() { }

  ngOnInit() {
  }

  ngAfterContentInit() {
    this.input = this.model || this.control;
    if (this.input === undefined) {
      throw new Error('Esse componente precisa ser usado com uma diretiva ngModel ou formControlName')
    }
  }

  hasSuccess(): boolean {
    return this.input.valid && (this.input.dirty || this.input.touched);
  }

  hasError(): boolean {
    return this.input.invalid && (this.input.dirty || this.input.touched);
  }

}
