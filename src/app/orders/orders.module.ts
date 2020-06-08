import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DataGenerateN, DataGenerateFactory } from '../core/services/data-generate.factory';
import { GeneratorService } from '../core/services/generator.service';
import { OrdersRoutingModule } from './orders-routing.module';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [OrdersRoutingModule.components],
  imports: [
    CommonModule,
    FormsModule
  ],
  providers: [{ provide: DataGenerateN, useFactory: DataGenerateFactory(17), deps: [GeneratorService] }],
  exports: [
    OrdersRoutingModule, OrdersRoutingModule.components
  ]
})
export class OrdersModule { }
