import { Injectable } from '@angular/core';

import { CountUp, CountUpOptions } from 'countup.js';



@Injectable({
  providedIn: 'root'
})
export class CountService {

  constructor() { }

  createCountUp(target : string, endVal: number, options?: CountUpOptions): CountUp {
    const defaultOptions : CountUpOptions = {
      startVal: 3500,
      duration: 3,
      useEasing: true,
    };

    const countUpOptions : CountUpOptions = Object.assign({}, defaultOptions, options);

    return new CountUp(target, endVal, countUpOptions);

  }


}
