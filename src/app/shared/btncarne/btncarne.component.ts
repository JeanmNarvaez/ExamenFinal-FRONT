import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-btncarne',
  templateUrl: './btncarne.component.html',
  styleUrls: ['./btncarne.component.css']
})
export class BtncarneComponent {
  constructor(private router: Router) {}

  navigateToCarne() {
    this.router.navigate(['/carne']);
  }
}
