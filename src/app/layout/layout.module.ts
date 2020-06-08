import { NgModule } from '@angular/core';
import { AboutComponent } from './components/about/about.component';
import { SharedModule } from '../shared/shared.module';
import { LoginComponent } from './components/login/login.component';


@NgModule({
  declarations: [AboutComponent, LoginComponent],
  imports: [
    SharedModule
  ],
  exports: [AboutComponent, LoginComponent]
})
export class LayoutModule { }
