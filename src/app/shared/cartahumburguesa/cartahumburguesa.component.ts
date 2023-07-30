import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cartahumburguesa',
  templateUrl: './cartahumburguesa.component.html',
  styleUrls: ['./cartahumburguesa.component.css']
})
export class CartahumburguesaComponent {
  constructor(private router: Router) { }

  @Input() burger1!: { image: string };
  @Input() owner1!: string;
  @Input() burgerName1!: string;
  @Input() rating1!: number | string;

  @Input() burger2!: { image: string };
  @Input() owner2!: string;
  @Input() burgerName2!: string;
  @Input() rating2!: number | string;

  @Input() burger3!: { image: string };
  @Input() owner3!: string;
  @Input() burgerName3!: string;
  @Input() rating3!: number | string;

  @Input() burger4!: { image: string };
  @Input() owner4!: string;
  @Input() burgerName4!: string;
  @Input() rating4!: number | string;

  @Input() burger5!: { image: string };
  @Input() owner5!: string;
  @Input() burgerName5!: string;
  @Input() rating5!: number | string;

  @Input() burger6!: { image: string };
  @Input() owner6!: string;
  @Input() burgerName6!: string;
  @Input() rating6!: number | string;

  // Add more @Input properties as needed for additional cards

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
    this.router.navigate(['/recetahamburguesa']);

    // Perform actions when the card is clicked
    // For example, you can navigate to a detailed view of the card
  }
}
