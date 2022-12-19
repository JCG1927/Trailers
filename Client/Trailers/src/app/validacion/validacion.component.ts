import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { Router } from '@angular/router';

@Component({
  selector: 'app-validacion',
  templateUrl: './validacion.component.html',
  styleUrls: ['./validacion.component.css']
})
export class ValidacionComponent implements OnInit {

  username = ''
  password = ''

  constructor(private http:HttpClient, private router: Router) { }

  ngOnInit(): void {
  }

  subir() {

    if (this.username!='admin' || this.password != '123456'){
      setTimeout(()=>{
        alert("Contraseña o nombre incorrecto")
      },5000)
    }else{
      setTimeout(()=>{
        this.router.navigate(['/admin'])
      },3000)

    }
  }


}
