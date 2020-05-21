import { Directive, ElementRef, Renderer2, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appAboutStyle]'
})
export class AboutStyleDirective {

  // tslint:disable-next-line:no-input-rename
  @Input('appAboutStyle') color: string;

  constructor(private element: ElementRef, private renderer: Renderer2) {

  }
  @HostListener('mouseover') onMouseOver() {
    this.setfontSize('16pt');
    this.setBackground(this.color);
  }

  @HostListener('mouseout') onMouseOut() {
    this.setfontSize('12pt');
    this.setBackground('white');
  }

  private setfontSize(val: string) {
    this.renderer.setStyle(this.element.nativeElement, 'font-size', val);
  }

  private setBackground(val: string) {
    this.renderer.setStyle(this.element.nativeElement, 'background', val);
  }

}
