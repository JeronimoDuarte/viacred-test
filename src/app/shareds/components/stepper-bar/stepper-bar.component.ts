import { Component } from '@angular/core';
import { Input} from '@angular/core';
import { StepperBarModel } from '../../models/stepper-bar.model';
@Component({
  selector: 'app-stepper-bar',
  templateUrl: './stepper-bar.component.html',
  styleUrls: ['./stepper-bar.component.scss']
})
export class StepperBarComponent {
  
  @Input() listStepper: StepperBarModel[] = [];
}
