import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor(private router: Router) {}
  
  navigateToDesayunos() {
    this.router.navigate(['/desayunos']);
  }

  navigateToAlmuerzos() {
    this.router.navigate(['/almuerzos']);
  }

  navigateToSobreNosotros() {
    this.router.navigate(['/sobrenosotros']);
  }
}
