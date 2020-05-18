import { Directive, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appTrashBackground]'
})
export class TrashBackgroundDirective {

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
