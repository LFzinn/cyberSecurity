import { Component, OnInit } from '@angular/core';
import { GsapService } from 'src/app/shared/services/gsap.service';

@Component({
  selector: 'app-section3',
  templateUrl: './section3.component.html',
  styleUrls: ['./section3.component.css']
})
export class section3Component implements OnInit {

  constructor(private gsapService: GsapService) { }

  ngOnInit(): void {
    const element = document.querySelector('.element-section3') as HTMLElement;
    const element3 = document.querySelector('.element-section3-1') as HTMLElement;
    this.gsapService.animateOnScroll(element);
    this.gsapService.animateOnScroll(element3);
  }


  boxs = [
    {title: 'Be your trusted compliance and ris program advisor.'},
    {title: 'Deliver cost-efffective technology to reduce enterprise-wide risk'},
    {title: 'Provide expert consulting services to support IT teams.'},
    {title: 'Bring information security leadership to enterprises of all sizes'},
  ]

  boxs2 = [
    {title: 'Cyber Security is an applied science'},
    {title: 'Cyber Security is considered an art as much as a science'},
  ]







}
