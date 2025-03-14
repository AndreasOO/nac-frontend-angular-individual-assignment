import { Injectable } from '@angular/core';
import {Product} from '../products/product';
import {Observable, BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartLocalStorageService {
  private data = new BehaviorSubject(this.getCartItemsFromStorage())
  public currentCartItems = this.data.asObservable()

  constructor() { }


  public addItemToCart(product:Product) {
    const currentCart:Product[] = this.getCartItemsFromStorage();
    currentCart.push(product);
    this.updateCartItems(currentCart);
    this.data.next(currentCart);
  }

  public updateCartItems(products:Product[]) {
    localStorage.setItem("cartItems", JSON.stringify(products));
  }

  public getCartItemsFromStorage():Product[] {
    const cartItems = localStorage.getItem("cartItems");
    if (cartItems) {
      return JSON.parse(localStorage.getItem("cartItems")!) as Product[]
    } else {
      return [] as Product[]
    }
  }

  public clearCart() {
    localStorage.clear()
    this.data.next(this.getCartItemsFromStorage());
  }
}
