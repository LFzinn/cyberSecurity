import { Component, OnInit } from '@angular/core';
import { GsapService } from 'src/app/shared/services/gsap.service';

@Component({
  selector: 'app-section3',
  templateUrl: './section3.component.html',
  styleUrls: ['./section3.component.css']
})
export class Section3Component implements OnInit {

  constructor(private gsapService: GsapService) { }

  ngOnInit(): void {
    const element4 = document.querySelector('.element4') as HTMLElement;
    this.gsapService.animateOnScroll(element4);
  }

  isMonthly: boolean = true;
  isAPI: boolean = false;
  titleHeader: string = 'WEB APLICATION'

  price1 : string = '$99';
  price2 : string = '$399';
  time : string = 'Month'
  time2 : string = 'Monthly'



  changeHeader(){
    this.isAPI = !this.isAPI;
    if(this.isAPI === true) {
      this.titleHeader = 'API PROTECTION'
    }else if(this.isAPI === false) {
      this.titleHeader = 'WEB APLICATION'
    }
  }

  changePrice(){
    this.isMonthly = !this.isMonthly;
    if(this.isMonthly === false) {
      this.price1 = '$1068'
      this.price2 = '$4188'
      this.time = 'Yearly'
      this.time2 = 'Yearly'
    }else if (this.isMonthly === true) {
      this.price1 = '$99'
      this.price2 = '$399'
      this.time = 'Month'
      this.time2 = 'Monthly'
    }
  }





}
