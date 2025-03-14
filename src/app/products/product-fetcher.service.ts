import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map, Observable} from 'rxjs';
import {Product} from './product';
import {ProductDTO} from './product-dto';

@Injectable({
  providedIn: 'root'
})
export class ProductFetcherService {

  constructor(private http: HttpClient) {
    console.log("testing service")
  }

  public findProducts():Observable<Product[]> {
    console.log("finding products");
    return this.http.get<ProductDTO[]>("https://fakestoreapi.com/products")
                    .pipe(
                      map(products => products
                                                          .map(product => {
                                                                                      return {
                                                                                        id: product.id,
                                                                                        imageUrl: product.image,
                                                                                        title: product.title,
                                                                                        category: product.category,
                                                                                        description: product.description,
                                                                                        rate: product.rating.rate,
                                                                                        ratingCount: product.rating.count,
                                                                                        price : product.price
                                                                                      }
                                                                                      }))
                    );

  }
}
