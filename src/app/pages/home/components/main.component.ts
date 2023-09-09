import { Component, OnInit } from '@angular/core';
import { GsapService } from 'src/app/shared/services/gsap.service';



@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  constructor(private gsapService: GsapService) { }

  ngOnInit(): void {
    const element = document.querySelector('.element-main') as HTMLElement;

    this.gsapService.animateOnScroll(element);
  }
}
