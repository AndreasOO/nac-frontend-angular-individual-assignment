import {Component, OnInit} from '@angular/core';
import {Product} from '../../products/product';
import {CartLocalStorageService} from '../cart-local-storage.service';

@Component({
  selector: 'app-shopping-cart',
  standalone: false,
  templateUrl: './shopping-cart.component.html',
  styleUrl: './shopping-cart.component.css'
})
export class ShoppingCartComponent implements OnInit {
  numberOfItemsInCart:number | undefined
  constructor(public storage:CartLocalStorageService) {
  }

  ngOnInit() {
    this.storage.currentCartItems.subscribe(products => this.numberOfItemsInCart = products.length)
  }
}
