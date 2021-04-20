import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-garden',
  templateUrl: './garden.component.html',
  styleUrls: ['./garden.component.css']
})



export class GardenComponent implements OnInit {

  favoriteSeason: any;
  seasons: string[] = ['Cookie', 'Bolo', 'Pães', 'Misturado com café'];

  url: string = "https://material.angular.io/assets/img/examples/shiba2.jpg";
  cursoAngular: boolean = true;
  urlImagem = 'https://ages.pexels.com/photos/3772492/pexels-photo-3772492.jpeg?cs=srgb&dl=pexels-abdulrhman-elkady-3772492.jpg&fm=jpg';

  
  

  constructor() { }

  ngOnInit(): void {
  }

}
