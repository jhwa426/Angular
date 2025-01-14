import {Component, input, Input, output} from '@angular/core';
import {DialogModule} from 'primeng/dialog';
import {
  FormBuilder,
  FormsModule,
  ReactiveFormsModule,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import {RatingModule} from 'primeng/rating';
import {ButtonModule} from 'primeng/button';
import {Product} from '../../../type';

@Component({
  selector: 'app-edit-popup',
  standalone: true,
  imports: [
    DialogModule,
    FormsModule,
    RatingModule,
    ButtonModule,
    ReactiveFormsModule,
  ],
  templateUrl: './edit-popup.component.html',
  styleUrl: './edit-popup.component.scss',
})
export class EditPopupComponent {
  productForm: any;
  displayChange = output<boolean>();
  header = input<string>();
  confirm = output<Product>();
  display = input<boolean>(false);
  product = input<Product>({
    name: '',
    image: '',
    price: '',
    rating: 0,
  });

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    // Initialise the form inside ngOnInit
    this.productForm = this.formBuilder.group({
      name: ['', [Validators.required, this.specialCharacterValidator()]],
      image: [''],
      price: ['', [Validators.required]],
      rating: [0],
    });

    // this.productForm.patchValue({
    //     name: this.product.name,
    //     image: this.product.image,
    //     price: this.product.price,
    //     rating: this.product.rating,
    // });
  }

  specialCharacterValidator(): ValidatorFn {
    return (control) => {
      const hasSpecialCharacter = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/.test(
        control.value
      );

      return hasSpecialCharacter ? {hasSpecialCharacter: true} : null;
    };
  }

  ngOnChanges() {
    this.productForm.patchValue(this.product());
  }

  onConfirm() {
    const {name, image, price, rating} = this.productForm.value;

    this.confirm.emit({
      name: name || '',
      image: image || '',
      price: price || '',
      rating: rating || 0,
    });

    this.displayChange.emit(!this.display());
  }

  onCancel() {
    this.displayChange.emit(!this.display());
  }
}
