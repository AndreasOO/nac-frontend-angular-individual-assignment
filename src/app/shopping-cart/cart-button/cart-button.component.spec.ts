import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartButtonComponent } from './cart-button.component';

describe('ShoppingCartComponent', () => {
  let component: CartButtonComponent;
  let fixture: ComponentFixture<CartButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CartButtonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CartButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
