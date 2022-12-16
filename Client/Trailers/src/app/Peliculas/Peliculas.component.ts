import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-Peliculas',
  templateUrl: './Peliculas.component.html',
  styleUrls: ['./Peliculas.component.css']
})
export class PeliculasComponent implements OnInit {

  data = {
    img1:"https://www.ecartelera.com/carteles/11100/11185/001_m.jpg",
  }



  constructor() { }

  ngOnInit() {
  }

}
