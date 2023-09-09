import { Component, OnInit } from '@angular/core';
import { GsapService } from 'src/app/shared/services/gsap.service';

@Component({
  selector: 'app-price',
  templateUrl: './price.component.html',
  styleUrls: ['./price.component.css']
})
export class PriceComponent implements OnInit {

  constructor(private gsapService: GsapService) { }

  ngOnInit(): void {
    const element = document.querySelector('.element-main') as HTMLElement;
    this.gsapService.animateOnScroll(element);
  }

  items = [
    { title : 'Virtually patch critical vulnerabilities with a 24 hour SLA'},
    { title : 'Zero false positives guaranteed'},
    { title : 'Comprehensive coverage against OWASP top 10, Zero-Day and DDoS'},
    { title : '100% applications deployed in block mode'},
  ]

}
