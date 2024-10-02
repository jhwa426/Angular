import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [RouterOutlet],
    template: `
        <p>Hello</p>
    `,
    styleUrl: './app.component.css'
})
export class AppComponent {
    title = 'todo-List';
}
