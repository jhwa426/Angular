import {Component, input, output, viewChild} from '@angular/core';
import {Product} from '../../../type';
import {RatingModule} from 'primeng/rating';
import {FormsModule} from '@angular/forms';
import {ButtonModule} from 'primeng/button';
import {ConfirmationService} from 'primeng/api';
import {PricePipe} from '../../pipes/price.pipe';
import {TruncateNamePipe} from '../../pipes/truncate-name.pipe';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [
    RatingModule,
    FormsModule,
    ButtonModule,
    PricePipe,
    TruncateNamePipe,
  ],
  providers: [ConfirmationService],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss',
})
export class ProductComponent {
  private readonly deleteButton = viewChild<any>('deleteButton');

  productOutput = output<Product>;

  edit = output<Product>();
  delete = output<Product>();
  product = input<Product>();

  constructor(private confirmationService: ConfirmationService) {}

  ngOnInit() {}

  editProduct() {
    const currentProduct = this.product();
    if (currentProduct) {
      this.edit.emit(currentProduct);
    }
  }

  confirmDelete() {
    this.confirmationService.confirm({
      target: this.deleteButton().nativeElement,
      message: 'Are you sure that you want to delete this product?',
      accept: () => {
        this.deleteProduct();
      },
    });
  }

  deleteProduct() {
    const currentProduct = this.product();
    if (currentProduct) {
      this.delete.emit(currentProduct);
    }
  }
}
