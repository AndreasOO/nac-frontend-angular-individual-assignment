import { NgModule } from '@angular/core';
import { ReactiveFormsModule} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CheckoutViewComponent } from './checkout-view/checkout-view.component';



@NgModule({
  declarations: [
    CheckoutViewComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ]
})
export class CheckoutModule { }
