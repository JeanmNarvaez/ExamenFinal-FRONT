import { Component } from '@angular/core';

@Component({
  selector: 'app-recetahamburguesa',
  templateUrl: './recetahamburguesa.component.html',
  styleUrls: ['./recetahamburguesa.component.css']
})
export class RecetahamburguesaComponent {

  dishName: string;
  personName: string;
  ingredients: { name: string, isChecked: boolean }[];
  preparationSteps: { description: string, isImage?: boolean }[];

  constructor() {
    // Initialize your data here or fetch it from a service
    this.dishName = 'Union Ring Chezzy Burger';
    this.personName = 'Manuel Narvaez';
    this.ingredients = [
      { name: '1 cebolla, cortada en 4 aros', isChecked: false },
      { name: '1 libra de carne molida', isChecked: false },
      { name: '10 rebanadas de queso americano', isChecked: false },
      { name: 'Aceite vegetal, para freír', isChecked: false },
      { name: 'Sal y pimienta', isChecked: false }
    ];
    this.preparationSteps = [
      { description: '1. Trabajar con los aros de cebolla:' },
      { description: 'Pele y corte rodajas gruesas de una cebolla y retire los anillos del medio, conservando solo los anillos exteriores grandes.Rellena cada aro de cebolla con la mezcla de queso crema y congela por 1 hora.' },
      { description: 'https://thecozycook.com/wp-content/uploads/2020/07/How-to-Cut-Onion-Rings-2.jpg', isImage: true },
      { description: '2. Preparar anillos de cebolla' },
      { description: 'Cubra cada aro de cebolla congelado con harina, seguido de los huevos batidos. Freír las cebollas en aceite hasta que estén doradas.' },
      { description: 'https://www.allrecipes.com/thmb/riouEgfO9AywX0nYG73z8GGraHk=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/207422_Old-Fashioned-Onion-Rings_82659_Photo-by-Tricia-Winterle-Jaeger-2000-a96820e27cb64cafa8c4925ad027a59d.jpg', isImage: true },   
      { description: '3. Cocinar la hamburguesa' },
      { description: 'Coloque la hamburguesa más pequeña sobre el queso. Cocine las hamburguesas en una sartén hasta que estén listas.' },
      { description: 'https://www.tasteofhome.com/wp-content/uploads/2020/10/pan-frying-patties-TOHcom20_258869_E10_06_4b.jpg', isImage: true },
      { description: '4. Preparar y servir:' },
      { description: 'Coloque encima las rodajas de cebolla frita. Agrega la hamburguesa y decora con ketchup y mostaza. Coloque encima una rodaja de cebolla cubierta con semillas de sésamo. ¡Disfrutar!' },
      { description: 'https://images.ricardocuisine.com/services/recipes/5500.jpg', isImage: true },

    ];
  }

  ngOnInit(): void {
    this.addAdditionalStepsAndImages(); // Call the method to add steps and images
  }

  // Additional method to add steps and images
  addAdditionalStepsAndImages(): void {
    // Add images along with descriptions
    this.preparationSteps.push(
      
    );
  }
}
