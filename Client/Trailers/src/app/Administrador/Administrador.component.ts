import {Component, OnInit} from '@angular/core';
import {ApiServiceService} from "../ApiService.service";
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";

@Component({
  selector: 'app-Administrador',
  templateUrl: './Administrador.component.html',
  styleUrls: ['./Administrador.component.css']
})

export class AdministradorComponent implements OnInit {


  titulo:any

  pelisFiltradas:any =[

  ]

  lista:any=[

  ]




  constructor(private _servicioPeliculas:ApiServiceService, private http:HttpClient, private router:Router) { }

  ngOnInit() {

 this.getPelis()
  }

  getDelete(id:string){
    if (confirm("Estas seguro de esta acción?\nLa pelicula será eliminada de la Base de datos")){
      this._servicioPeliculas.deleteTrailers(id).subscribe(res => {
        console.log(res);
        const index = this.pelisFiltradas.findIndex(movie => movie._id === id);
        this.pelisFiltradas.splice(index, 1);
      }, err => {
        console.error(err)
      })
    }
    else{
      console.log("pus ok")
    }
  }

  getPelis(){

    this._servicioPeliculas.getData().subscribe((res:any)=> {
      console.log(res)
      this.lista = res
      this.pelisFiltradas = res.data
    });
  }

  getTrailers(){
    console.log(this.pelisFiltradas)
    this.pelisFiltradas = this.lista.data.filter(peli =>
    peli.title.includes(this.titulo.toUpperCase()));
    console.log(this.titulo)
  }

  getUpdate(id:string){
    let prod = this.http.get(`http://localhost:3000/movies/${id}`).subscribe((res)=>{
      console.log(res)
    })

  }
  editMovie(movie: any) {
    this.router.navigate(['/editar', movie._id]);
  }

  // getUpdate(id:string){
  //   let producto = this.pelisFiltradas.find((p)=>{return p.id==id})
  //   console.log(producto)
  // }


  isVisible = false;

  openModal() {
    this.isVisible = true;
  }

  closeModal() {
    this.isVisible = false;
  }

}
