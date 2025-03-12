import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductViewComponent } from './products/product-view/product-view.component';
import {CheckoutViewComponent} from './checkout/checkout-view/checkout-view.component';


const routes: Routes = [
  {path: 'products', component: ProductViewComponent},
  {path: 'checkout', component: CheckoutViewComponent},
  {path: '', component: ProductViewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
