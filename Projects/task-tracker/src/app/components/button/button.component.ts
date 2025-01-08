import { Component, EventEmitter, input, output } from '@angular/core';

@Component({
  selector: 'app-button',
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
})
export class ButtonComponent {
  text = input.required<'Close' | 'Add'>();
  color = input<'red' | 'grean'>();
  // btnClick = output<void>(new EventEmitter<void>());
}
