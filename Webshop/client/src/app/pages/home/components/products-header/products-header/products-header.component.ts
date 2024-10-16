import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';


@Component({
    selector: 'app-products-header',
    standalone: true,
    imports: [MatCardModule, MatIconModule, MatMenuModule],
    templateUrl: './products-header.component.html',
    styleUrl: './products-header.component.css'
})


export class ProductsHeaderComponent {

}
