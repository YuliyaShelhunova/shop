import { Directive, HostListener, ElementRef, Renderer2, HostBinding } from '@angular/core';

@Directive({
  selector: '[appTrashBackground]'
})
export class TrashBackgroundDirective {

  constructor(private element: ElementRef, private renderer: Renderer2) {
  }
  private background = 'white';

  @HostBinding('style.background') get getBackground(){
    return this.background;
  }

  @HostListener('mouseover') onMouseOver() {
    this.background = 'grey';
  }

  @HostListener('mouseout') onMouseOut() {
    this.background = 'white';
  }
}
