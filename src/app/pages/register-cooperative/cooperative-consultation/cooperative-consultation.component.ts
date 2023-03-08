import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { StepperBarModel } from 'src/app/shareds/models/stepper-bar.model';
import { GenericsValidatorsService } from 'src/app/shareds/services/generics-validators.service';
import {PersonModel } from '../models/person.model';
import { PersonService } from '../services/person.service';

@Component({
  selector: 'app-cooperative-consultation',
  templateUrl: './cooperative-consultation.component.html',
  styleUrls: ['./cooperative-consultation.component.scss']
})
export class CooperativeConsultationComponent implements OnInit {

  register!: FormGroup;
  constructor(
    private fb: FormBuilder, 
    private genericValidators: GenericsValidatorsService,
    private personService: PersonService
  ){
    
  }


  ngOnInit() {
    this.register = this.fb.group({
      cpf: this.fb.control('',  this.genericValidators.isValidCpf())
    })
  }

  listStepper: StepperBarModel[] = [
    {
      active: true,
      title: 'Início'
    },
    {
      active: false,
      title: 'Documentos'
    },
    {
      active: false,
      title: 'Dados cadastrais'
    },
    {
      active: false,
      title: 'Admissão'
    }
  ]
  person?: PersonModel;

  getPerson(){
    
    this.personService.getPerson(this.register.value.cpf).subscribe({
      next: (res: any) => {
        console.log("RETORNO DATA", res);
        const persons = res.data.persons;
        const valuePerson = persons.filter((item: any) => item.cpf = this.register.value.cpf);
        console.log("valuePerson => ", valuePerson);
        this.person = valuePerson[0];
      },
      error: (error: any) =>  {
        console.log("error data ", error)
      }

    })
  }
}
