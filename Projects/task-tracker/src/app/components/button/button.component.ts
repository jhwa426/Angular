import { Component, input, output } from '@angular/core';
import { Color } from '../../../types/app.types';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
})
export class ButtonComponent {
  text = input.required<'Close' | 'Add'>();
  color = input<Color>();
  btnClick = output();

  constructor() {}

  onClick() {
    this.btnClick.emit();
  }
}
