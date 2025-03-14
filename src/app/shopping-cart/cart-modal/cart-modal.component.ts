import { Component } from '@angular/core';
import {Product} from '../../products/product';
import {OnInit} from '@angular/core';
import {CartLocalStorageService} from '../cart-local-storage.service';

@Component({
  selector: 'app-cart-modal',
  standalone: false,
  templateUrl: './cart-modal.component.html',
  styleUrl: './cart-modal.component.css'
})
export class CartModalComponent implements OnInit {
  shoppingCart:Product[] | undefined
  totalPrice:number | undefined
  constructor(public storage:CartLocalStorageService) {
  }

  public removeItemAtIndex(index:number) {
    this.storage.removeItemFromCart(index)
  }

  ngOnInit() {
    this.storage.currentCartItems.subscribe(cartItems => this.shoppingCart = cartItems)
    this.storage.currentCartItems.subscribe(cartItems => this.totalPrice =
      Math.round(cartItems.map(prod => prod.price).reduce((y,x) => x+y,0)*100)/100)
  }

}
