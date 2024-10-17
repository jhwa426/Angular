import { Component, EventEmitter, Output } from '@angular/core';
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
    @Output() columnsCountChange = new EventEmitter<number>();
    @Output() itemsCountChange = new EventEmitter<number>();
    @Output() sortChange = new EventEmitter<string>();

    itemsShowCount = 12;
    sort = 'desc';

    constructor() { }

    onSortUpdated(newSort: string): void {
        this.sortChange.emit(newSort);
        this.sort = newSort;
    }

    onItemsUpdated(count: number): void {
        this.itemsCountChange.emit(count);
        this.itemsShowCount = count;
    }

    onColumnsUpdated(colsNum: number): void {
        this.columnsCountChange.emit(colsNum);
    }

}
