import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from './navigation/navigation.component';

import { HeaderComponent } from './header/header.component';
import { ContentBodyComponent } from './content-body/content-body.component';
import { FooterComponent } from './footer/footer.component';



@NgModule({
  declarations: [
    NavigationComponent,
    HeaderComponent,
    ContentBodyComponent,
    FooterComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ContentBodyComponent
  ]
})
export class CoreModule { }
