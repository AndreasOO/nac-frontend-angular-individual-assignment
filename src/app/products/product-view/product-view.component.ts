import { Component } from '@angular/core';
import {OnInit} from '@angular/core';
import {Product} from '../product';
import {ProductFetcherService} from '../product-fetcher.service';


@Component({
  selector: 'app-product-view',
  standalone: false,
  templateUrl: './product-view.component.html',
  styleUrl: './product-view.component.css'
})
export class ProductViewComponent implements OnInit {
    products:Product[] | undefined;
    products2:Product[] | undefined;
    constructor(public fetcher:ProductFetcherService) {
      console.log("in constructor")
      this.fetcher = fetcher
    }

    ngOnInit() {
      this.fetcher.findProducts().subscribe(products3 => this.products2 = products3);
      console.log(this.products2)
      this.products = [
        {id:1, title:"Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops", price:109.95, description:"Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday", category:"men's clothing", ratingCount:120, rate:3.9, imageUrl:"https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"},
        {id:1, title:"Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops", price:109.95, description:"Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday", category:"men's clothing", ratingCount:120, rate:3.9, imageUrl:"https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"},
        {id:1, title:"Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops", price:109.95, description:"Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday", category:"men's clothing", ratingCount:120, rate:3.9, imageUrl:"https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"},
        {id:1, title:"Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops", price:109.95, description:"Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday", category:"men's clothing", ratingCount:120, rate:3.9, imageUrl:"https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"},
        {id:1, title:"Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops", price:109.95, description:"Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday", category:"men's clothing", ratingCount:120, rate:3.9, imageUrl:"https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"},
        {id:1, title:"Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops", price:109.95, description:"Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday", category:"men's clothing", ratingCount:120, rate:3.9, imageUrl:"https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"},
        {id:1, title:"Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops", price:109.95, description:"Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday", category:"men's clothing", ratingCount:120, rate:3.9, imageUrl:"https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"},
        {id:1, title:"Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops", price:109.95, description:"Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday", category:"men's clothing", ratingCount:120, rate:3.9, imageUrl:"https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"},
        {id:1, title:"Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops", price:109.95, description:"Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday", category:"men's clothing", ratingCount:120, rate:3.9, imageUrl:"https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"},
        {id:1, title:"Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops", price:109.95, description:"Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday", category:"men's clothing", ratingCount:120, rate:3.9, imageUrl:"https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"},
        {id:1, title:"Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops", price:109.95, description:"Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday", category:"men's clothing", ratingCount:120, rate:3.9, imageUrl:"https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"},
        {id:1, title:"Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops", price:109.95, description:"Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday", category:"men's clothing", ratingCount:120, rate:3.9, imageUrl:"https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"},
        {id:1, title:"Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops", price:109.95, description:"Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday", category:"men's clothing", ratingCount:120, rate:3.9, imageUrl:"https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"},
        {id:1, title:"Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops", price:109.95, description:"Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday", category:"men's clothing", ratingCount:120, rate:3.9, imageUrl:"https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"},
        {id:1, title:"Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops", price:109.95, description:"Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday", category:"men's clothing", ratingCount:120, rate:3.9, imageUrl:"https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"},
        {id:1, title:"Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops", price:109.95, description:"Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday", category:"men's clothing", ratingCount:120, rate:3.9, imageUrl:"https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"},
        {id:1, title:"Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops", price:109.95, description:"Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday", category:"men's clothing", ratingCount:120, rate:3.9, imageUrl:"https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"},
        {id:1, title:"Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops", price:109.95, description:"Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday", category:"men's clothing", ratingCount:120, rate:3.9, imageUrl:"https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"},
        {id:1, title:"Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops", price:109.95, description:"Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday", category:"men's clothing", ratingCount:120, rate:3.9, imageUrl:"https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"},
        {id:1, title:"Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops", price:109.95, description:"Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday", category:"men's clothing", ratingCount:120, rate:3.9, imageUrl:"https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"},
        {id:1, title:"Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops", price:109.95, description:"Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday", category:"men's clothing", ratingCount:120, rate:3.9, imageUrl:"https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"}
      ];
    }
}
