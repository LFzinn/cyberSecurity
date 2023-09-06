import { Component, AfterViewInit, ElementRef } from '@angular/core';
import { CountService } from 'src/app/shared/services/count.service';

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
  ) {}



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
