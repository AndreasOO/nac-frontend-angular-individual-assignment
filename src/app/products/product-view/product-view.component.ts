import { Component } from '@angular/core';
import {OnInit} from '@angular/core';
import {Product} from '../product';
import {ProductFetcherService} from '../product-fetcher.service';
import {CartLocalStorageService} from '../../shopping-cart/cart-local-storage.service';


@Component({
  selector: 'app-product-view',
  standalone: false,
  templateUrl: './product-view.component.html',
  styleUrl: './product-view.component.css'
})
export class ProductViewComponent implements OnInit {
    products:Product[] | undefined;
    constructor(public fetcher:ProductFetcherService, public storage: CartLocalStorageService) {
    }

    addProductToCart(product:Product) {
      this.storage.addItemToCart(product)
    }

    ngOnInit() {
      this.fetcher.findProducts().subscribe(products => this.products = products);
    }
}
