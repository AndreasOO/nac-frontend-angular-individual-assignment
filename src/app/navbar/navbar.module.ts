import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { CartButtonComponent } from '../shopping-cart/cart-button/cart-button.component';
import { CartModalComponent} from '../shopping-cart/cart-modal/cart-modal.component';
import {RouterLink} from '@angular/router';
import {ShoppingCartModule} from '../shopping-cart/shopping-cart.module';



@NgModule({
  declarations: [
    NavbarComponent,
    CartButtonComponent,
    CartModalComponent
  ],
  exports: [
    NavbarComponent,
    CartModalComponent
  ],
  imports: [
    CommonModule,
    RouterLink,
    ShoppingCartModule,

  ]
})
export class NavbarModule { }
