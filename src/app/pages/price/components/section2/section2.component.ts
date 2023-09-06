import { Component } from '@angular/core';
import { SectionModel } from 'src/app/shared/components/header/models/section';

@Component({
  selector: 'app-section2',
  templateUrl: './section2.component.html',
  styleUrls: ['./section2.component.css']
})
export class Section2Component {
  image1 = '../../../../../assets/page2_assets/hacking.png'
  image2 = '../../../../../assets/page2_assets/computador-seguro.png'
  image3 = '../../../../../assets/page2_assets/cofre.png'


  cards: SectionModel[] = [
    {icon: this.image1, alt : 'imagem de hacker generico', title: 'Vulnerable to', description: 'Attacks such as: Credential Stuffing, Brute Force, DDoS & BOT Attacks, Site Scraping, API Abuse, Account Takeover, Input Validation, and Zero-Day.', url : ''},
    {icon: this.image2, alt : 'imagem de um computador com um escudo', title: 'Application Security', description: 'Combating the evolving security risk trends and ever-growing threat landscape due to the unavailability of the right appsec expertise at the right time.', url : ''},
    {icon: this.image3, alt : 'imagem de cofre generico', title: 'Exposure of Sensitive data', description: 'Preventing malicious access to personal and financial data due to the exploitation of vulnerabilities in the application.', url : ''},
  ]



  items = [
    { title: 'Patch Critical Vulnerabilities in 24 Hours',},
    { title: 'Unmetered DDoS Mitigation & BOT Protection',},
    { title: 'API Security',},
    { title: 'Correlate Risk with Protection Status',},
    { title: 'Consolidate Multiple WAF Consoles',},
  ]

}
