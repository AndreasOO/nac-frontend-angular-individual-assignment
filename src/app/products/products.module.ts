import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductTableComponent } from './product-table/product-table.component';
import { ProductViewComponent } from './product-view/product-view.component';



@NgModule({
  declarations: [
    ProductTableComponent,
    ProductViewComponent
  ],
  exports: [
    ProductTableComponent,
    ProductViewComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ProductsModule { }
