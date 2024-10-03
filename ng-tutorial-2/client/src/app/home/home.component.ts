import { Component } from '@angular/core';
import { ProductsService } from "../services/products.service";
import { Product, Products } from "../../type";
import { ProductComponent } from "../components/product/product.component";
import { CommonModule } from "@angular/common";

@Component({
    selector: 'app-home',
    standalone: true,
    imports: [ProductComponent, CommonModule],
    templateUrl: './home.component.html',
    styleUrl: './home.component.css'
})


export class HomeComponent {
    constructor(private productsServices: ProductsService) { }

    products: Product[] = [];

    onProductOutput(product: Product) {
        console.log(product, "output");
    }

    ngOnInit() {
        this.productsServices
            .getProducts("http://localhost:3000/clothes", { page: 0, perPage: 5 })
            .subscribe((products: Products) => {
                this.products = products.items;
            })
    }

}
