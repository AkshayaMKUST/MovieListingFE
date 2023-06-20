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

  deleteProduct(movieId: number): void {
    const confirmDelete = confirm('Are you sure you want to delete this movie?');
    if (confirmDelete) {
      this.service.deleteProductById(movieId).subscribe(() => {
        console.log('Movie deleted successfully');
        this.getMovies();
        alert('Movie deleted successfully');
        this.router.navigate(['retrieve']);
      });
    }
  }

  // Rest of your component code...
}
