import { NgModule } from '@angular/core';
import { ReactiveFormsModule} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CheckoutViewComponent } from './checkout-view/checkout-view.component';
import { CheckoutReceiptComponent } from './checkout-receipt/checkout-receipt.component';
import {RouterLink} from '@angular/router';



@NgModule({
  declarations: [
    CheckoutViewComponent,
    CheckoutReceiptComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterLink
  ]
})
export class CheckoutModule { }
