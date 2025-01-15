import { Component, OnInit } from '@angular/core';
import { MatCard } from '@angular/material/card';
import { MatIcon } from '@angular/material/icon';
import { Cart, CartItem } from '../../../types/app.types';
import { Subscription } from 'rxjs';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [MatCard, MatIcon, CurrencyPipe],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss',
})
export class CartComponent implements OnInit {
  cart: Cart = { items: [] };
  displayedColumns: string[] = [
    'product',
    'name',
    'price',
    'quantity',
    'total',
    'action',
  ];
  dataSource: CartItem[] = [];
  cartSubscription: Subscription | undefined;

  constructor() {}

  ngOnInit() {}

  getTotal(items: CartItem[]): number {
    return 1;
  }

  onRemoveQuantity(item: CartItem) {}
  onAddQuantity(item: CartItem) {}
  onClearCart() {}
  onRemoveFromCart(item: CartItem) {}
  onCheckout() {}
}
