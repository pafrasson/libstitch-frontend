import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputComponent } from './components/input/input.component';



@NgModule({
  declarations: [InputComponent],
  exports: [InputComponent],
  imports: [
    CommonModule
  ]
})
export class CoreModule { }
