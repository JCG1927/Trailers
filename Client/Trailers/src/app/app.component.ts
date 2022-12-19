import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Trailers';

  constructor(private router:Router) {
  }

  enviar(){
    this.router.navigate(['/validacion'])
  }

}
