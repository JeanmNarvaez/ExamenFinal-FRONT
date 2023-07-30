import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cartadesayunos',
  templateUrl: './cartadesayunos.component.html',
  styleUrls: ['./cartadesayunos.component.css']
})
export class CartadesayunosComponent {
  constructor(private router: Router) {}

  @Input() desayuno1!: { image: string };
  @Input() type1!: string;
  @Input() desayunoName1!: string;
  @Input() rating1!: number | string;

  @Input() desayuno2!: { image: string };
  @Input() type2!: string;
  @Input() desayunoName2!: string;
  @Input() rating2!: number | string;

  @Input() desayuno3!: { image: string };
  @Input() type3!: string;
  @Input() desayunoName3!: string;
  @Input() rating3!: number | string;

  @Input() desayuno4!: { image: string };
  @Input() type4!: string;
  @Input() desayunoName4!: string;
  @Input() rating4!: number | string;

  @Input() desayuno5!: { image: string };
  @Input() type5!: string;
  @Input() desayunoName5!: string;
  @Input() rating5!: number | string;

  @Input() desayuno6!: { image: string };
  @Input() type6!: string;
  @Input() desayunoName6!: string;
  @Input() rating6!: number | string;

  @Input() desayuno7!: { image: string };
  @Input() type7!: string;
  @Input() desayunoName7!: string;
  @Input() rating7!: number | string;

  @Input() desayuno8!: { image: string };
  @Input() type8!: string;
  @Input() desayunoName8!: string;
  @Input() rating8!: number | string;

  @Input() desayuno9!: { image: string };
  @Input() type9!: string;
  @Input() desayunoName9!: string;
  @Input() rating9!: number | string;

  @Input() desayuno10!: { image: string };
  @Input() type10!: string;
  @Input() desayunoName10!: string;
  @Input() rating10!: number | string;

  @Input() desayuno11!: { image: string };
  @Input() type11!: string;
  @Input() desayunoName11!: string;
  @Input() rating11!: number | string;

  @Input() desayuno12!: { image: string };
  @Input() type12!: string;
  @Input() desayunoName12!: string;
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
    this.router.navigate(['/recetadesayunos']);

    // Perform actions when the card is clicked
    // For example, you can navigate to a detailed view of the card
  }
}
