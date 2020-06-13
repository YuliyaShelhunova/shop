import { Component, ViewChild, ElementRef, OnInit, AfterViewInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AppSettings } from './core/services/app-settings.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit {
  @ViewChild('appTitle') appTitle: ElementRef<HTMLElement>;
  description: string;

  constructor(private appSettings: AppSettings) { }

  ngOnInit() {
    this.appSettings.appSettings$.subscribe((settings) => this.description = settings.description);
  }
  ngAfterViewInit() {
    this.appTitle.nativeElement.textContent = 'Shop';
  }
  onActivate($event: any, routerOutlet: RouterOutlet) {
    console.log('Activated Component', $event, routerOutlet);
  }

  onDeactivate($event: any, routerOutlet: RouterOutlet) {
    console.log('Deactivated Component', $event, routerOutlet);
  }
}
