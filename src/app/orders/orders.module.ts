import { NgModule } from '@angular/core';
import { OrderFormComponent } from './components';
import { FormsModule } from '@angular/forms';
import { DataGenerateN, DataGenerateFactory } from '../core/services/data-generate.factory';
import { GeneratorService } from '../core/services/generator.service';

@NgModule({
  declarations: [
    OrderFormComponent
  ],
  imports: [
    FormsModule
  ],
  providers: [{ provide: DataGenerateN, useFactory: DataGenerateFactory(17), deps: [GeneratorService] }],
  exports: [
    OrderFormComponent
  ]
})
export class OrdersModule { }
