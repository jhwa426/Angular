import { Component } from '@angular/core';
import { ProductsService } from "../services/products.service";
import { Product, Products } from "../../type";
import { ProductComponent } from "../components/product/product.component";
import { CommonModule } from "@angular/common";
import { PaginatorModule } from 'primeng/paginator';

@Component({
    selector: 'app-home',
    standalone: true,
    imports: [ProductComponent, CommonModule, PaginatorModule],
    templateUrl: './home.component.html',
    styleUrl: './home.component.css'
})


export class HomeComponent {
    constructor(private productsService: ProductsService) { }

    products: Product[] = [];

    totalRecords: number = 0;
    rows: number = 5;

    onProductOutput(product: Product) {
        console.log(product, "output");
    }

    onPageChange(event: any) {
        this.fetchProduct(event.page, event.rows);
    }

    fetchProduct(page: number, perPage: number) {
        this.productsService
            .getProducts("http://localhost:3000/clothes", { page, perPage })
            .subscribe({
                next: (data: Products) => {
                    this.products = data.items;
                    this.totalRecords = data.total;
                },
                error: (error) => {
                    console.log(error);
                },
            });

    }

    // Default fetching products
    ngOnInit() {
        this.fetchProduct(0, this.rows);
    }

    // CRUD operations
    editProduct(product: Product, id: number) {
        this.productsService
            .editProduct(`http://localhost:3000/clothes/${id}`, product)
            .subscribe({
                next: (data) => {
                    console.log(data);
                    this.fetchProduct(0, this.rows);
                },
                error: (error) => {
                    console.log(error);
                },
            });
    }

    deleteProduct(id: number) {
        this.productsService
            .deleteProduct(`http://localhost:3000/clothes/${id}`)
            .subscribe({
                next: (data) => {
                    console.log(data);
                    this.fetchProduct(0, this.rows);
                },
                error: (error) => {
                    console.log(error);
                },
            });
    }

    addProduct(product: Product) {
        this.productsService
            .addProduct(`http://localhost:3000/clothes`, product)
            .subscribe({
                next: (data) => {
                    console.log(data);
                    this.fetchProduct(0, this.rows);
                },
                error: (error) => {
                    console.log(error);
                },
            });
    }

}
