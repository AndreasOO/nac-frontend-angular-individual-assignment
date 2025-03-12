import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import {RouterLink} from '@angular/router';



@NgModule({
  declarations: [
    NavbarComponent,
    ShoppingCartComponent
  ],
  exports: [
    NavbarComponent
  ],
  imports: [
    CommonModule,
    RouterLink
  ]
})
export class NavbarModule { }
