import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';



@NgModule({
  declarations: [
    NavbarComponent,
    ShoppingCartComponent
  ],
  exports: [
    NavbarComponent
  ],
  imports: [
    CommonModule
  ]
})
export class NavbarModule { }
