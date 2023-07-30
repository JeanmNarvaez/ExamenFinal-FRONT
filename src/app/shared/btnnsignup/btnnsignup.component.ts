import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-btnnsignup',
  templateUrl: './btnnsignup.component.html',
  styleUrls: ['./btnnsignup.component.css']
})

export class BtnnsignupComponent {
  constructor(private router: Router) {}
  signup(){
    this.router.navigate(['/register']);

  }
}
