import { Injectable } from '@angular/core';
import {Product} from '../products/product';

@Injectable({
  providedIn: 'root'
})
export class CartLocalStorageService {


  constructor() { }

  public addItemToCart(product:Product) {
    const currentCart:Product[] = this.getCartItemsFromStorage();
    currentCart.push(product);
    this.updateCartItems(currentCart);
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
}
