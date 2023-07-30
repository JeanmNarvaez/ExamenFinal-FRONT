import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cartacarne',
  templateUrl: './cartacarne.component.html',
  styleUrls: ['./cartacarne.component.css']
})
export class CartacarneComponent {
  constructor(private router: Router) { }

  @Input() carne1!: { image: string };
  @Input() type1!: string;
  @Input() carneName1!: string;
  @Input() rating1!: number | string;

  @Input() carne2!: { image: string };
  @Input() type2!: string;
  @Input() carneName2!: string;
  @Input() rating2!: number | string;

  @Input() carne3!: { image: string };
  @Input() type3!: string;
  @Input() carneName3!: string;
  @Input() rating3!: number | string;

  @Input() carne4!: { image: string };
  @Input() type4!: string;
  @Input() carneName4!: string;
  @Input() rating4!: number | string;

  @Input() carne5!: { image: string };
  @Input() type5!: string;
  @Input() carneName5!: string;
  @Input() rating5!: number | string;

  @Input() carne6!: { image: string };
  @Input() type6!: string;
  @Input() carneName6!: string;
  @Input() rating6!: number | string;

  // Add more @Input properties as needed for additional meat burger cards

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
    this.router.navigate(['/recetacarne']);

    // Perform actions when the card is clicked
    // For example, you can navigate to a detailed view of the card
  }
}
