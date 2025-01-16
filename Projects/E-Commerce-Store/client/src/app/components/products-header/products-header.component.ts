import { Component, output } from "@angular/core";

@Component({
  selector: "app-products-header",
  templateUrl: "./products-header.component.html",
})
export class ProductsHeaderComponent {
  columnsCountChange = output<number>();
  itemsCountChange = output<number>();
  sortChange = output<string>();
  itemsShowCount: number = 12;
  sort: string = "desc";

  constructor() {}

  onColumnsUpdated(colsNum: number) {
    this.columnsCountChange.emit(colsNum);
  }

  onItemsUpdated(count: number) {
    this.itemsCountChange.emit(count);
    this.itemsShowCount = count;
  }

  onSortUpdated(newSort: string) {
    this.sortChange.emit(newSort);
    this.sort = newSort;
  }
}
