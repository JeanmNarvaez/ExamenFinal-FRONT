import { Component } from '@angular/core';

@Component({
  selector: 'app-redes-sociales',
  templateUrl: './redes-sociales.component.html',
  styleUrls: ['./redes-sociales.component.css']
})
export class RedesSocialesComponent {

  constructor() { }
  
  goToFacebook() {
    window.location.href = "https://www.facebook.com/UISEKEcuador/?locale=es_LA";
  }
  
  goToInstagram() {
    window.location.href = "https://www.instagram.com/uisekecuador/";
  }
  

}