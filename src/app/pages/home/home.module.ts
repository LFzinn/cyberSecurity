import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { section1Component } from './main/section1/section1.component';
import { MainComponent } from './main/main.component';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { section2Component } from './main/section2/section2.component';
import { section3Component } from './main/section3/section3.component';
import { Section4Component } from './main/section4/section4.component';
import { ButtonComponent } from 'src/app/shared/ui_components/button/button.component';



@NgModule({
  declarations: [
    MainComponent,
    section1Component,
    section2Component,
    section3Component,
    Section4Component,
    ButtonComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
  ]
})
export class HomeModule { }
