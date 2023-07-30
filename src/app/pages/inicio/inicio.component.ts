import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent {
  public image?:string;
  public image2?:string;
  public image3?:string;

  public Titulo:string = "ABQ";
  @Input() dataPizza:any;
  constructor(){ }
  ngOnInit():void{
    

  }
}
