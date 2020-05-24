import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrashBackgroundDirective } from './directives/trash-background.directive';
import { AboutStyleDirective } from './directives/about-style.directive';
import { OrderByPipe } from './pipe/order-by.pipe';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [TrashBackgroundDirective, AboutStyleDirective, OrderByPipe],
  exports: [
    TrashBackgroundDirective,
    AboutStyleDirective,
    OrderByPipe,
    CommonModule,
    FormsModule],
  imports: []
})
export class SharedModule { }
