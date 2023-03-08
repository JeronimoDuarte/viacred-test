import { Component, Input } from '@angular/core';
import { PersonModel } from '../models/person.model';

@Component({
  selector: 'app-card-consultation',
  templateUrl: './card-consultation.component.html',
  styleUrls: ['./card-consultation.component.scss']
})
export class CardConsultationComponent {
  @Input() person: PersonModel | undefined;

}
