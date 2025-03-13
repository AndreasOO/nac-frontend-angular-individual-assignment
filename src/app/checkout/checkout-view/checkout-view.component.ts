import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Product} from '../../products/product';


@Component({
  selector: 'app-checkout-view',
  standalone: false,
  templateUrl: './checkout-view.component.html',
  styleUrl: './checkout-view.component.css'
})
export class CheckoutViewComponent implements OnInit {
  shoppingCart:Product[] | undefined
  totalPrice:number | undefined

  public shippingForm = new FormGroup({
    //TODO ADD REGXPS
    name: new FormControl('', { nonNullable:true, validators: [Validators.required, Validators.pattern('^[a-zA-ZåäöÅÄÖ ]{2,50}$')]}),
    email: new FormControl('', { nonNullable:true, validators: [Validators.required, Validators.pattern('^([a-zA-Z0-9._-]+@\\w+\\.\\w+){1,50}$')]}),
    phone: new FormControl('', { nonNullable:true, validators: [Validators.required, Validators.pattern('^[0-9-()]+$')]}),
    street: new FormControl('', { nonNullable:true, validators: [Validators.required, Validators.pattern('^^[a-zA-ZåäöÅÄÖ0-9 ]{2,50}$')]}),
    postalCode: new FormControl('', { nonNullable:true, validators: [Validators.required, Validators.pattern('^\\s*\\d\\s*\\d\\s*\\d\\s*\\d\\s*\\d\\s*$')]}),
    postalArea: new FormControl('', { nonNullable:true, validators: [Validators.required, Validators.pattern('^[a-zA-ZåäöÅÄÖ ]{2,50}$')]})
  })

  public validateAndSubmit() {
    console.log("submit");
  }

  public get nameTouched() {
    return this.shippingForm.controls.name.touched
  }

  public get emailTouched() {
    return this.shippingForm.controls.email.touched
  }

  public get phoneTouched() {
    return this.shippingForm.controls.phone.touched
  }

  public get streetTouched() {
    return this.shippingForm.controls.street.touched
  }
  public get postalCodeTouched() {
    return this.shippingForm.controls.postalCode.touched
  }

  public get postalAreaTouched() {
    return this.shippingForm.controls.postalArea.touched
  }



  constructor() {
  }

  // TODO CHECK IF WE CAN GET DATA FROM SHOPPING CART COMPONENT
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
