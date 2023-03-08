import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StepperBarComponent } from './components/stepper-bar/stepper-bar.component';
import { InputValidateComponent } from './components/input-validate/input-validate.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    StepperBarComponent,
    InputValidateComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,

  ],
  exports: [
    StepperBarComponent,
    InputValidateComponent
  ]
})
export class SharedsModule { }
