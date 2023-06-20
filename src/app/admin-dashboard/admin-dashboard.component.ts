import { Component } from '@angular/core';
import { Movie } from '../Model/movie';
import { ConnectivityService } from '../connectivity.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent {
  Movies: Movie[] = [];
  selectedMovie: Movie | undefined;

  constructor(private service: ConnectivityService, private router: Router) {}

  ngOnInit(): void {
    this.getMovies();
  }

  getMovies(): void {
    this.service.getMovies().subscribe((Movies) => {
      this.Movies = Movies;
    });
  }

  showMovieDetails(movie: Movie): void {
    this.selectedMovie = movie;
  }

  // Rest of your component code...
}
