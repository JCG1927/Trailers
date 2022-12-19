import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit {

  movie:any

  constructor(   private route: ActivatedRoute,
                 private router: Router,
                 private http: HttpClient) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const movieId = params.get('id');
      this.http.get<any>(`http://localhost:3000/movies/${movieId}`).subscribe(movie => {
        this.movie = movie;
      });
    });
  }


saveMovie(){
  this.http.put(`http://localhost:3000/movies/editar${this.movie._id}`, this.movie).subscribe(() => {
    this.router.navigate(['/movies']);
  });
}

}
