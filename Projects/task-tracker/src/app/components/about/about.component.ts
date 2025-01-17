import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
})
export class AboutComponent implements OnInit {
  private router = inject(Router);

  constructor() {}

  goBack() {
    this.router.navigate(['/']);
  }
  ngOnInit(): void {}
}
