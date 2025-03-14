import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Product} from '../../products/product';
import {Router} from '@angular/router';
import {CartLocalStorageService} from '../../shopping-cart/cart-local-storage.service';


@Component({
  selector: 'app-checkout-view',
  standalone: false,
  templateUrl: './checkout-view.component.html',
  styleUrl: './checkout-view.component.css'
})
export class CheckoutViewComponent implements OnInit {
  shoppingCart:Product[] | undefined
  totalPrice:number | undefined

  constructor(private router:Router, public storage:CartLocalStorageService) {
  }

  public shippingForm = new FormGroup({
    name: new FormControl('', { nonNullable:true, validators: [Validators.required, Validators.pattern('^[a-zA-ZåäöÅÄÖ ]{2,50}$')]}),
    email: new FormControl('', { nonNullable:true, validators: [Validators.required, Validators.pattern('^([a-zA-Z0-9._-]+@\\w+\\.\\w+){1,50}$')]}),
    phone: new FormControl('', { nonNullable:true, validators: [Validators.required, Validators.pattern('^[0-9-()]+$')]}),
    street: new FormControl('', { nonNullable:true, validators: [Validators.required, Validators.pattern('^^[a-zA-ZåäöÅÄÖ0-9 ]{2,50}$')]}),
    postalCode: new FormControl('', { nonNullable:true, validators: [Validators.required, Validators.pattern('^\\s*\\d\\s*\\d\\s*\\d\\s*\\d\\s*\\d\\s*$')]}),
    postalArea: new FormControl('', { nonNullable:true, validators: [Validators.required, Validators.pattern('^[a-zA-ZåäöÅÄÖ ]{2,50}$')]})
  })

  public validateAndSubmit() {
    if (this.shippingForm.valid) {
      this.router.navigate(['/receipt'])
    } else {
      alert("Please fill in the required form in order to continue")
      console.log("found errors");
    }
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


  public removeItemAtIndex(index:number) {
    this.storage.removeItemFromCart(index)
  }



  ngOnInit() {
    this.storage.currentCartItems.subscribe(cartItems => this.shoppingCart = cartItems)
    this.storage.currentCartItems.subscribe(cartItems => this.totalPrice =
      Math.round(cartItems.map(prod => prod.price).reduce((y,x) => x+y,0)*100)/100)
  }


}
