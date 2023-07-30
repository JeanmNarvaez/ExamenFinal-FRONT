import { Component } from '@angular/core';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css']
})
export class BuscadorComponent {
  searchTerm: string = '';

  search() {
    // Implement your search logic here
    console.log('Search term:', this.searchTerm);
  }
}
