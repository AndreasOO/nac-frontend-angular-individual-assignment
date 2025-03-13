import { NgModule } from '@angular/core';
import { ReactiveFormsModule} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CheckoutViewComponent } from './checkout-view/checkout-view.component';
import { CheckoutReceiptComponent } from './checkout-receipt/checkout-receipt.component';



@NgModule({
  declarations: [
    CheckoutViewComponent,
    CheckoutReceiptComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ]
})
export class CheckoutModule { }
