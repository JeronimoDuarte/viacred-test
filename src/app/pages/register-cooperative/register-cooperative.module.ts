import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CooperativeConsultationComponent } from './cooperative-consultation/cooperative-consultation.component';
import { RegisterCooperativeRouting } from './register-cooperative-routing.module';
import { CoreModule } from 'src/app/core/core.module';
import { SharedsModule } from 'src/app/shareds/shareds.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CardConsultationComponent } from './card-consultation/card-consultation.component';
import { NgxMaskModule } from 'ngx-mask';
import { PersonService } from './services/person.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    CooperativeConsultationComponent,
    CardConsultationComponent
  ],
  imports: [
    CommonModule,
    RegisterCooperativeRouting,
    CoreModule,
    SharedsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxMaskModule.forChild()
  ],
  providers: [
    PersonService,
    HttpClient
  ]
})
export class RegisterCooperativeModule { }
