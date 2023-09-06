import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { section1Component } from './components/section1/section1.component';
import { MainComponent } from './components/main.component';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { section2Component } from './components/section2/section2.component';
import { section3Component } from './components/section3/section3.component';
import { Section4Component } from './components/section4/section4.component';
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
