import { Component, input, output } from "@angular/core";
import { Product } from "src/app/types/app.types";

@Component({
  selector: "[app-product-box]",
  templateUrl: "./product-box.component.html",
})
export class ProductBoxComponent {
  fullWidthMode = input<boolean>(false);
  product = input<Product | undefined>();
  addToCart = output<Product>();

  constructor() {}

  onAddToCart() {
    const currentProduct = this.product();
    if (currentProduct) {
      this.addToCart.emit(currentProduct);
    }
  }
}
