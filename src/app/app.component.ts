import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  @ViewChild('appTitle') appTitle: ElementRef<HTMLInputElement>; // почему HTMLInput...? HTMLHeadingElement или HTMLElement

  ngAfterViewInit() {
    this.appTitle.nativeElement.textContent = 'Shop';
  }
}
