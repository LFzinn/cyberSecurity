import { Component, AfterViewInit, ElementRef, OnInit } from '@angular/core';
import { CountService } from 'src/app/shared/services/count.service';
import { GsapService } from 'src/app/shared/services/gsap.service';

@Component({
  selector: 'app-section1',
  templateUrl: './section1.component.html',
  styleUrls: ['./section1.component.css']
})





export class Section1Component implements AfterViewInit {

  private isVisible = false;

  constructor
  (
    private countService: CountService,
    private elementRef: ElementRef,
    private gsapService: GsapService
  ) {}


  ngOnInit(): void {
    const element = document.querySelector('.element') as HTMLElement;

    this.gsapService.animateOnScroll(element);
  }


  ngAfterViewInit(): void {
    const count1 = this.countService.createCountUp('number1', 5000, {
      separator: '',
      duration: 3,
      decimalPlaces: 0,
    });
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        if (!this.isVisible) {
          count1.start();
          this.isVisible = true;
        }
      }
    });

    observer.observe(this.elementRef.nativeElement);
  }





}
