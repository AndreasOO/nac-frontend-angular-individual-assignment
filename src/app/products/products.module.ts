import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductViewComponent } from './product-view/product-view.component';



@NgModule({
  declarations: [
    ProductViewComponent
  ],
  exports: [
    ProductViewComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ProductsModule { }
