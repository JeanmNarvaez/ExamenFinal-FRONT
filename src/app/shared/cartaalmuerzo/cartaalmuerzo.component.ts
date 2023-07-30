import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cartaalmuerzo',
  templateUrl: './cartaalmuerzo.component.html',
  styleUrls: ['./cartaalmuerzo.component.css']
})
export class CartaalmuerzoComponent {
  constructor(private router: Router) {}

  @Input() almuerzo1!: { image: string };
  @Input() type1!: string;
  @Input() almuerzoName1!: string;
  @Input() rating1!: number | string;

  @Input() almuerzo2!: { image: string };
  @Input() type2!: string;
  @Input() almuerzoName2!: string;
  @Input() rating2!: number | string;

  @Input() almuerzo3!: { image: string };
  @Input() type3!: string;
  @Input() almuerzoName3!: string;
  @Input() rating3!: number | string;

  @Input() almuerzo4!: { image: string };
  @Input() type4!: string;
  @Input() almuerzoName4!: string;
  @Input() rating4!: number | string;

  @Input() almuerzo5!: { image: string };
  @Input() type5!: string;
  @Input() almuerzoName5!: string;
  @Input() rating5!: number | string;

  @Input() almuerzo6!: { image: string };
  @Input() type6!: string;
  @Input() almuerzoName6!: string;
  @Input() rating6!: number | string;

  @Input() almuerzo7!: { image: string };
  @Input() type7!: string;
  @Input() almuerzoName7!: string;
  @Input() rating7!: number | string;

  @Input() almuerzo8!: { image: string };
  @Input() type8!: string;
  @Input() almuerzoName8!: string;
  @Input() rating8!: number | string;

  @Input() almuerzo9!: { image: string };
  @Input() type9!: string;
  @Input() almuerzoName9!: string;
  @Input() rating9!: number | string;

  @Input() almuerzo10!: { image: string };
  @Input() type10!: string;
  @Input() almuerzoName10!: string;
  @Input() rating10!: number | string;

  @Input() almuerzo11!: { image: string };
  @Input() type11!: string;
  @Input() almuerzoName11!: string;
  @Input() rating11!: number | string;

  @Input() almuerzo12!: { image: string };
  @Input() type12!: string;
  @Input() almuerzoName12!: string;
  @Input() rating12!: number | string;

  stars = [1, 2, 3, 4, 5];

  onMouseEnter() {
    // Perform actions when the mouse enters the card
    // For example, you can change the card's appearance
  }

  onMouseLeave() {
    // Perform actions when the mouse leaves the card
    // For example, you can reset the card's appearance
  }

  onClick() {
    this.router.navigate(['/recetaalmuerzo']);

    // Perform actions when the card is clicked
    // For example, you can navigate to a detailed view of the card
  }
}
