import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

constructor(private http: HttpClient) { }

private API_URL = 'http://localhost:3000/movies';


public get(url:string){
  return this.http.get(url)
}



getTrailers(){

  return this.http.get('http://localhost:3000/movies');


}

getData(){

  let options = {}
  return this.http.get(this.API_URL, options)
}

buscarTrailer(title:string){
  return this.http.get<any[]>(`http://localhost:3000/movies/search?title=${title}`)
}



//
// editTrailers(id:string) {
//   return this.http.put(`${this.API_URL}/${id}`)
// }

  getUnTrailer(){

  }

  porId(id:string){
    return this.http.get(`${this.API_URL}/${id}`)
  }

deleteTrailers(id:string){
  return this.http.delete(`${this.API_URL}/delete/${id}`)
}

addTrailers(trailer:any): Observable<any>{
  return this.http.post(`${this.API_URL}`,trailer);
}



}
