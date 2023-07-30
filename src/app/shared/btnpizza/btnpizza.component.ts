// btnpizza.component.ts
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-btnpizza',
  templateUrl: './btnpizza.component.html',
  styleUrls: ['./btnpizza.component.css']
})
export class BtnpizzaComponent {
  constructor(private router: Router) {}

  navigateToPizza() {
    this.router.navigate(['/pizza']);
  }
}
