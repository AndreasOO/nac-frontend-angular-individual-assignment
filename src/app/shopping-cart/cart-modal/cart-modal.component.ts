import { Component } from '@angular/core';
import {Product} from '../../products/product';
import {OnInit} from '@angular/core';

@Component({
  selector: 'app-cart-modal',
  standalone: false,
  templateUrl: './cart-modal.component.html',
  styleUrl: './cart-modal.component.css'
})
export class CartModalComponent implements OnInit {
  shoppingCart:Product[] | undefined
  totalPrice:number | undefined
  constructor() {
  }

  ngOnInit() {
    // check if local storage contains cart -> if yes then get them, if no then create empty list
    this.shoppingCart = [
      {id:1, title:"Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops", price:109.95, description:"Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday", category:"men's clothing", ratingCount:120, rate:3.9, imageUrl:"https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"},
      {id:1, title:"Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops", price:109.95, description:"Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday", category:"men's clothing", ratingCount:120, rate:3.9, imageUrl:"https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"},
      {id:1, title:"Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops", price:109.95, description:"Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday", category:"men's clothing", ratingCount:120, rate:3.9, imageUrl:"https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"},
      {id:1, title:"Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops", price:109.95, description:"Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday", category:"men's clothing", ratingCount:120, rate:3.9, imageUrl:"https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"},
      {id:1, title:"Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops", price:109.95, description:"Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday", category:"men's clothing", ratingCount:120, rate:3.9, imageUrl:"https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"},
      {id:1, title:"Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops", price:109.95, description:"Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday", category:"men's clothing", ratingCount:120, rate:3.9, imageUrl:"https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"},
      {id:1, title:"Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops", price:109.95, description:"Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday", category:"men's clothing", ratingCount:120, rate:3.9, imageUrl:"https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"},
      {id:1, title:"Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops", price:109.95, description:"Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday", category:"men's clothing", ratingCount:120, rate:3.9, imageUrl:"https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"},
      {id:1, title:"Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops", price:109.95, description:"Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday", category:"men's clothing", ratingCount:120, rate:3.9, imageUrl:"https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"}
    ]
    this.totalPrice = Math.round(this.shoppingCart.map(prod => prod.price).reduce((x,y) => x+y)*100)/100;
  }
}
