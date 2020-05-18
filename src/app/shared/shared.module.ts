import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrashBackgroundDirective } from './trash-background.directive';

@NgModule({
  declarations: [TrashBackgroundDirective],
  exports: [TrashBackgroundDirective],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
