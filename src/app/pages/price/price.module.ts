import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PriceRoutingModule } from './price-routing.module';
import { PriceComponent } from './components/price.component';
import { Section1Component } from './components/section1/section1.component';
import { Section2Component } from './components/section2/section2.component';
import { Section3Component } from './components/section3/section3.component';


@NgModule({
  declarations: [
    PriceComponent,
    Section1Component,
    Section2Component,
    Section3Component,
  ],
  imports: [
    CommonModule,
    PriceRoutingModule,
  ]
})
export class PriceModule { }
