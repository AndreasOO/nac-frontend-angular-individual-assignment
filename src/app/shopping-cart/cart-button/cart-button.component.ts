import {Component, OnInit} from '@angular/core';
import {Product} from '../../products/product';
import {CartLocalStorageService} from '../cart-local-storage.service';

@Component({
  selector: 'app-shopping-cart',
  standalone: false,
  templateUrl: './cart-button.component.html',
  styleUrl: './cart-button.component.css'
})
export class CartButtonComponent implements OnInit {
  numberOfItemsInCart:number | undefined
  constructor(public storage:CartLocalStorageService) {
  }

  ngOnInit() {
    this.storage.currentCartItems.subscribe(products => this.numberOfItemsInCart = products.length)
  }
}
