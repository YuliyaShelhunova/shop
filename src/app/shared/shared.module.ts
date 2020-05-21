import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrashBackgroundDirective } from './directives/trash-background.directive';
import { AboutStyleDirective } from './directives/about-style.directive';

@NgModule({
  declarations: [TrashBackgroundDirective, AboutStyleDirective],
  exports: [TrashBackgroundDirective, AboutStyleDirective],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
