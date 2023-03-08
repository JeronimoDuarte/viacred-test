import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CooperativeConsultationComponent } from './cooperative-consultation/cooperative-consultation.component';

const routes: Routes = [
  {
    path: '',
    component: CooperativeConsultationComponent
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegisterCooperativeRouting { }