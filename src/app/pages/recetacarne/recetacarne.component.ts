import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recetacarne',
  templateUrl: './recetacarne.component.html',
  styleUrls: ['./recetacarne.component.css']
})
export class RecetacarneComponent implements OnInit {

  dishName: string;
  personName: string;
  ingredients: { name: string, isChecked: boolean }[];
  preparationSteps: { description: string, isImage?: boolean }[];

  constructor() {
    // Initialize your data here or fetch it from a service
    this.dishName = 'BBQ Glazed ribs';
    this.personName = 'Juan Tapia';
    this.ingredients = [
      { name: '1 Saint Louis ribs', isChecked: false },
      { name: '1 1/2 Tazas de jugo de manzana', isChecked: false },
      { name: '1/2 Tu salsa BBQ favorita', isChecked: false },
      { name: '1/2 Tu salsa de vinagre favorita', isChecked: false },
      { name: '1/4 Tu condimento favorito', isChecked: false }
    ];
    this.preparationSteps = [
      { description: '1. Trabajar con la costilla:' },
      { description: 'Retirar la membrana de cada costillar y recortar el exceso de grasa. Sazone por ambos lados con los aliños.' },
      { description: 'https://heygrillhey.com/static/680fc2e42066267a0a0ad7c90b702001/3-2-1Ribs.jpg', isImage: true },
      { description: '2. Cocinar la costilla' },
      { description: 'Coloque cada costilla en el ahumador y cocine durante 2 horas, rociando con jugo de manzana cada 30 minutos.' },
      { description: 'https://www.southernliving.com/thmb/QZhZsgq_vp-BBm1jabqUOopZrW0=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/southern-living_OvenBakedRibs_Step-7_1886-40c22e0dead84b8896fab1f82769be81.jpg', isImage: true },   
      { description: '3. Cepille la costilla' },
      { description: 'Combine ambas salsas y cepille sobre la parte trasera de cada costilla. Cepille el lado de la carne con la salsa.' },
      { description: 'https://heygrillhey.com/static/cd7117405af1ce7468e157c5506eb2cd/3-2-1Ribs-7.jpg', isImage: true },
      { description: '4. Cortar y servir:' },
      { description: 'Ase a la parrilla durante 3 a 4 minutos por cada lado, luego sirva.' },
      { description: 'https://heygrillhey.com/static/2467543c9b693d1f1e1fb7c376c57fb7/3-2-1Ribs-11.jpg', isImage: true },

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