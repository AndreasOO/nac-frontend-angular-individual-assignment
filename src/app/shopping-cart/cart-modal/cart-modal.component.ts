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
  itemCountMap:Map<number,number> | undefined

  constructor(public storage:CartLocalStorageService) {
  }

  public addItem(item:Product) {
    this.storage.addItemToCart(item)
  }

  public removeItem(item:Product) {
    this.storage.removeItemFromCart(item)
  }

  public clearCart() {
    this.storage.clearCart()
  }


  ngOnInit() {
    this.storage.currentCartItems.subscribe(cartItems => this.shoppingCart =
      cartItems.filter((v, i, a) => a.map(({ id }) => id).indexOf(v.id) === i));

    this.storage.currentCartItems.subscribe(cartItems => this.totalPrice =
      Math.round(cartItems.map(prod => prod.price).reduce((y,x) => x+y,0)*100)/100);

    this.storage.currentCartItems.subscribe(cartItems => this.itemCountMap =
      cartItems.reduce((acc, item) => {
        acc.set(item.id, acc.has(item.id) ? acc.get(item.id) +1 : 1);
        return acc;
      }, new Map()));
  }

}
