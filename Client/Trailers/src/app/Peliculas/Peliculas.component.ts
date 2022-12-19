import { HttpClient, HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../ApiService.service';

@Component({
  selector: 'app-Peliculas',
  templateUrl: './Peliculas.component.html',
  styleUrls: ['./Peliculas.component.css']
})
export class PeliculasComponent implements OnInit {




  

  constructor(private _servicioPeliculas:ApiServiceService, private http:HttpClient) { 
    
  
  }

  lista:any = [

  ]


  getData(){
    this._servicioPeliculas.getData().subscribe(res=>{
      this.lista = res
    })
  }

  ngOnInit() {

    this._servicioPeliculas.getTrailers().subscribe((res:any)=>{
      console.log(res)
      this.lista = res
  });

    
  
  
  }

  
  

}
