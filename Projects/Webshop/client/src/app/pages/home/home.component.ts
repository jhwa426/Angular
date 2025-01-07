import { Component } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { ProductsHeaderComponent } from "./components/products-header/products-header/products-header.component";
import { FiltersComponent } from "./components/filters/filters.component";
import { MatGridListModule } from '@angular/material/grid-list';
import { CommonModule } from '@angular/common';


@Component({
    selector: 'app-home',
    standalone: true,
    imports: [MatSidenavModule, ProductsHeaderComponent, FiltersComponent, MatGridListModule, CommonModule],
    templateUrl: './home.component.html',
    styleUrl: './home.component.css'
})


export class HomeComponent {
    cols = 3;
    category: string | undefined;


    onColumnsCountChange(colsNum: number): void {
        this.cols = colsNum;
    }

    onShowCategory(newCategory: string): void {
        this.category = newCategory;
    }

}
