import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent implements OnInit {
  private router = inject(Router);

  constructor() {}

  goToAbout() {
    this.router.navigate(['/about']);
  }

  ngOnInit(): void {}
}
