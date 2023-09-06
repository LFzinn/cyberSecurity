import { Component } from '@angular/core';

@Component({
  selector: 'app-price',
  templateUrl: './price.component.html',
  styleUrls: ['./price.component.css']
})
export class PriceComponent {

  items = [
    { title : 'Virtually patch critical vulnerabilities with a 24 hour SLA'},
    { title : 'Zero false positives guaranteed'},
    { title : 'Comprehensive coverage against OWASP top 10, Zero-Day and DDoS'},
    { title : '100% applications deployed in block mode'},
  ]

}
