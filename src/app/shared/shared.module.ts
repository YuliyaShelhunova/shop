import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrashBackgroundDirective } from './directives/trash-background.directive';
import { AboutStyleDirective } from './directives/about-style.directive';
import { OrderByPipe } from './pipe/order-by.pipe';
import { FormsModule } from '@angular/forms';
import { EnumToArrayPipe } from './pipe/enum-to-array.pipe';

@NgModule({
  declarations: [TrashBackgroundDirective, AboutStyleDirective, OrderByPipe, EnumToArrayPipe],
  exports: [
    TrashBackgroundDirective,
    AboutStyleDirective,
    OrderByPipe,
    EnumToArrayPipe,
    CommonModule,
    FormsModule],
  imports: []
})
export class SharedModule { }
