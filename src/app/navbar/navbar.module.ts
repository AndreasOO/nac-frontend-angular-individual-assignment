import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { ShoppingCartComponent } from '../shopping-cart/shopping-cart/shopping-cart.component';
import { CartModalComponent} from '../shopping-cart/cart-modal/cart-modal.component';
import {RouterLink} from '@angular/router';
import {ShoppingCartModule} from '../shopping-cart/shopping-cart.module';



@NgModule({
  declarations: [
    NavbarComponent,
    ShoppingCartComponent,
    CartModalComponent
  ],
  exports: [
    NavbarComponent
  ],
  imports: [
    CommonModule,
    RouterLink,
    ShoppingCartModule,

  ]
})
export class NavbarModule { }
