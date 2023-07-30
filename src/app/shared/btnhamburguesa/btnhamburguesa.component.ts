import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-btnhamburguesa',
  templateUrl: './btnhamburguesa.component.html',
  styleUrls: ['./btnhamburguesa.component.css']
})
export class BtnhamburguesaComponent {
  constructor(private router: Router) {}

  navigateToHamburguesa() {
    this.router.navigate(['/hamburguesa']);
  }
}
