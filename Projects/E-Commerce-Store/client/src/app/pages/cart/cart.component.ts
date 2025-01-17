import { HttpClient } from "@angular/common/http";
import { Component, OnDestroy, OnInit } from "@angular/core";
import { loadStripe } from "@stripe/stripe-js";
import { Subscription } from "rxjs";
import { CartService } from "src/app/services/cart.service";
import { Cart, CartItem } from "src/app/types/app.types";

@Component({
  selector: "app-cart",
  templateUrl: "./cart.component.html",
})
export class CartComponent implements OnInit, OnDestroy {
  cart: Cart = { items: [] };
  displayedColumns: string[] = [
    "product",
    "name",
    "price",
    "quantity",
    "total",
    "action",
  ];
  dataSource: CartItem[] = [];
  cartSubscription: Subscription | undefined;

  constructor(
    private cartService: CartService,
    private http: HttpClient,
  ) {}

  ngOnInit() {
    this.cartSubscription = this.cartService.cart.subscribe((cart: Cart) => {
      this.cart = cart;
      this.dataSource = cart.items;
    });
  }

  getTotal(items: CartItem[]): number {
    return this.cartService.getTotal(items);
  }

  onAddQuantity(item: CartItem) {
    this.cartService.addToCart(item);
  }

  onRemoveFromCart(item: CartItem) {
    this.cartService.removeFromCart(item);
  }

  onRemoveQuantity(item: CartItem) {
    this.cartService.removeQuantity(item);
  }

  onClearCart() {
    this.cartService.clearCart();
  }

  onCheckout() {
    this.http
      .post("http://localhost:3000/checkout", {
        items: this.cart.items,
      })
      .subscribe(async (res: any) => {
        let stripe = await loadStripe("your token");
        stripe?.redirectToCheckout({
          sessionId: res.id,
        });
      });
  }

  ngOnDestroy() {
    if (this.cartSubscription) {
      this.cartSubscription.unsubscribe();
    }
  }
}
