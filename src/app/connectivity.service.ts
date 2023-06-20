import { Injectable } from '@angular/core';
import { Movie } from './Model/movie';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ConnectivityService {

  constructor(private http: HttpClient) { }

  getMovies(): Observable<Movie[]> {
    return this.http.get<Movie[]>("http://localhost:8083/1.0/admin/viewAllMovies");
  }

  deleteProductById(id: number): Observable<string> {
    const url = `http://localhost:8083/1.0/admin/deleteAMovie/${id}`;
    
    return this.http.delete<string>(url, { responseType: 'text' as 'json' });
  }

}
