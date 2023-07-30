import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-btnlogin',
  templateUrl: './btnlogin.component.html',
  styleUrls: ['./btnlogin.component.css']
})
export class BtnloginComponent {
  constructor(private router: Router) {}

  btnlogin() {
    // Navigate to the /login route
    this.router.navigate(['/login']);
  }
}
