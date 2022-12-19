import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-acciones',
  templateUrl: './acciones.component.html',
  styleUrls: ['./acciones.component.css']
})
export class AccionesComponent implements OnInit {

  pelis ={
  cuadroTitulo: "",
  cuadroDirector: "",
  cuadroActores: "",
  cuadroFecha : "",
  cuadroReview : "",
  cuadroTrailerUrl : "",
  cuadroTrailerImg : "",
  cuadroDescripcion : "",}

  constructor(private http:HttpClient) { }

  ngOnInit(): void {

  }

  agregarPeli(){
    const data = {
      "title":this.pelis.cuadroTitulo,
      "date": this.pelis.cuadroFecha,
      "director": this.pelis.cuadroDirector,
      "actors":this.pelis.cuadroActores,
      "description":this.pelis.cuadroDescripcion,
      "review":this.pelis.cuadroReview,
      "imagesUrl":this.pelis.cuadroTrailerImg,
      "trailersUrl":this.pelis.cuadroTrailerUrl,
      "__v":0
    }

    this.http.post('http://localhost:3000/movies',data).subscribe((res)=>{
      alert("Se agrego la pelicula satisfactoriamente, ")
    }, err=>{
      alert(err.toString)
      console.log(data)

    })
  }

}
