import { Component, OnInit } from '@angular/core';
import {Product} from '../../products/product';
import {CartLocalStorageService} from '../../shopping-cart/cart-local-storage.service';

@Component({
  selector: 'app-checkout-receipt',
  standalone: false,
  templateUrl: './checkout-receipt.component.html',
  styleUrl: './checkout-receipt.component.css'
})
export class CheckoutReceiptComponent implements OnInit {

  shoppingCart:Product[] | undefined
  totalPrice:number | undefined

  constructor(public storage:CartLocalStorageService) {
  }


  ngOnInit() {
    // this.storage.currentCartItems.subscribe(cartItems => this.shoppingCart = cartItems)
    // this.storage.currentCartItems.subscribe(cartItems => this.totalPrice =
    //   Math.round(cartItems.map(prod => prod.price).reduce((y,x) => x+y,0)*100)/100)
    this.storage.clearCart();

  }
}
