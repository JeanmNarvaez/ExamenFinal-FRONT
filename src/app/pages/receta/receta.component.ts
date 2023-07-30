import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recetas',
  templateUrl: './receta.component.html',
  styleUrls: ['./receta.component.css']
})
export class RecetaComponent implements OnInit {

  dishName: string;
  personName: string;
  ingredients: { name: string, isChecked: boolean }[];
  preparationSteps: { description: string, isImage?: boolean }[];

  constructor() {
    // Initialize your data here or fetch it from a service
    this.dishName = 'Spicy Red Pizza';
    this.personName = 'Jean Narváez';
    this.ingredients = [
      { name: '3 onzas de salchicha italiana picante', isChecked: false },
      { name: '1 masa de pizza', isChecked: false },
      { name: '5 onzas de queso mozzarella ahumado, en rodajas.', isChecked: false },
      { name: '1/4 taza de salsa de tomate', isChecked: false },
      { name: '1 jalapeño grande, cortado en rodajas', isChecked: false },
      { name: '1/4 cebolla roja, en rodajas', isChecked: false }
    ];
    this.preparationSteps = [
      { description: '1. Trabajar con la Masa:' },
      { description: 'Estirar la masa sobre una superficie ligeramente enharinada. Si es difícil de enrollar, déjalo reposar durante 5 minutos para que alcance la temperatura ambiente. Para una pizza grande, me gusta enrollar mi masa en un círculo de aproximadamente 14 pulgadas de diámetro.' },
      { description: 'https://www.simplyrecipes.com/thmb/NtA236EpK_huL5V9MhSFmo09c30=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Simply-Recipes-Homemade-Pizza-METHOD-06-53b2f52cf4794d019ff87880956dd837.jpg', isImage: true },
      { description: '2. Agregue los ingredientes' },
      { description: 'Agregue la salsa en una capa ligera por toda la pizza, dejando aproximadamente 1/4 de pulgada de corteza alrededor de los bordes. Espolvoréelo sobre la salsa. Sazone la pizza con salchicha, jalapeño y cebolla roja.' },
      { description: 'https://www.simplyrecipes.com/thmb/F8SW2qzAe0VO4uhQc2n3yPJE4Xo=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Simply-Recipes-Homemade-Pizza-METHOD-09-d9e43b77b1844cca8defe6f9e56e181d.jpg', isImage: true },   
      { description: '3. Cocinar la Pizza' },
      { description: 'Deslice la pizza durante 8 minutos a 300F.' },
      { description: 'https://www.simplyrecipes.com/thmb/KQ70KgFNe4ictqw-I47ugXSIeUo=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Simply-Recipes-Homemade-Pizza-METHOD-10-01f70ecc84ea4a63bb5a723e5a027a09.jpg', isImage: true },
      { description: '4. Cortar y servir:' },
      { description: 'Agregar Oregano fresco y cortarlo.' },
      { description: 'https://foodmatch.com/assets/recipes/55002-3.1.jpg', isImage: true },
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
