import { Component, EventEmitter, input, output, Output } from '@angular/core';
import { Product } from '../../../types/app.types';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { CurrencyPipe, NgClass } from '@angular/common';

@Component({
  selector: 'app-product-box',
  standalone: true,
  imports: [MatCardModule, MatIconModule, NgClass, CurrencyPipe],
  templateUrl: './product-box.component.html',
  styleUrl: './product-box.component.scss',
})
export class ProductBoxComponent {
  fullWidthMode = input<boolean>(false);
  product = input<Product>();
  @Output() addToCart = new EventEmitter(); // @Output() addToCart = new EventEmitter<Product>();

  // addToCart = output<Product>();

  constructor() {}

  onAddToCart() {
    // const currentProduct = this.product();
    // if (currentProduct) {
    //   this.addToCart.emit(currentProduct);
    // }

    this.addToCart.emit(this.product);
  }
}
