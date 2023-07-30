import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-carta',
  templateUrl: './carta.component.html',
  styleUrls: ['./carta.component.css']
})
export class CartaComponent {
  constructor(private router: Router) { }
  @Input() food!: { image: string };
  @Input() owner!: string;
  @Input() dishName!: string;
  @Input() rating!: number | string;


  @Input() food2!: { image: string };
  @Input() owner2!: string;
  @Input() dishName2!: string;
  @Input() rating2!: number | string;

  @Input() food3!: { image: string };
  @Input() owner3!: string;
  @Input() dishName3!: string;
  @Input() rating3!: number | string;

  @Input() food4!: { image: string };
  @Input() owner4!: string;
  @Input() dishName4!: string;
  @Input() rating4!: number | string;

  @Input() food5!: { image: string };
  @Input() owner5!: string;
  @Input() dishName5!: string;
  @Input() rating5!: number | string;

  @Input() food6!: { image: string };
  @Input() owner6!: string;
  @Input() dishName6!: string;
  @Input() rating6!: number | string;

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
    this.router.navigate(['/receta']);
    
    // Perform actions when the card is clicked
    // For example, you can navigate to a detailed view of the card
  }
}
