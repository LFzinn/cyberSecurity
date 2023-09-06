import { Component } from '@angular/core';

@Component({
  selector: 'app-section3',
  templateUrl: './section3.component.html',
  styleUrls: ['./section3.component.css']
})
export class Section3Component {
  isMonthly: boolean = true;
  isAPI: boolean = false;

  price1 : string = '$99';
  price2 : string = '$399';
  time : string = 'Month'
  time2 : string = 'Monthly'


  changeHeader(){
    this.isAPI = !this.isAPI;
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
