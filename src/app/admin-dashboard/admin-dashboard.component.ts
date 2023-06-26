import { Component, ViewChild } from '@angular/core';
import { Movie } from '../Model/movie';
import { MovieTwo } from '../Model/movietwo';
import { ConnectivityService } from '../connectivity.service';
import { Router } from '@angular/router';
import {  ElementRef } from '@angular/core';


@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent {
  Movies: Movie[] = [];
  selectedMovie: any = {};
  movieId: number = 0;
  movietwo: MovieTwo = new MovieTwo();
  movie : Movie = new Movie();
  // isModalOpen: boolean = false;
  @ViewChild('movieForm', { static: false }) movieForm: ElementRef | undefined;
  constructor(private service: ConnectivityService, private router: Router) {
    this.selectedMovie = undefined;
  }

  ngOnInit(): void {
    // this.selectedMovie = {}
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
        // this.router.navigate(['retrieve']);
        // this.isModalOpen = false;
      });
    }
  }

  addMovie() {
    this.service.saveProduct(this.movietwo).subscribe(
      () => {
        console.log('Movie added successfully');
        alert('Movie added successfully');
        this.movietwo = new MovieTwo();
        this.getMovies();
      },
      (error) => {
        console.error('Failed to add movie', error);
      }
    );
  }

  onImageFileChange(event: any) {
    const file = event.target.files[0];
    this.movietwo.imageFile = file;
  }

  resetForm() {
    if (this.movieForm) {
      this.movieForm.nativeElement.reset();
      this.selectedMovie = undefined; // Reset selectedMovie to undefined
    }
  }

 

 updateMovieTwo(): void{

  this.movie.movieName = this.selectedMovie.movieName;
  this.movie.movieDirector = this.selectedMovie.movieDirector;
  this.movie.movieGenre = this.selectedMovie.movieGenre;
  this.movie.movieReleaseDate = this.selectedMovie.movieReleaseDate;
  this.movie.movieLanguage = this.selectedMovie.movieLanguage;
  this.movie.duration = this.selectedMovie.duration;
  this.movie.country = this.selectedMovie.country;
  this.movie.description = this.selectedMovie.description;
  this.movie.overallRate = this.selectedMovie.overallRate;

 }
  

  
 saveUpdatedProduct(): void {
  this.movietwo.movieName = this.movie.movieName;
       this.movietwo.movieDirector = this.movie.movieDirector;
       this.movietwo.movieGenre = this.movie.movieGenre;
       this.movietwo.movieReleaseDate = this.movie.movieReleaseDate;
       this.movietwo.movieLanguage = this.movie.movieLanguage;
       this.movietwo.duration = this.movie.duration;
       this.movietwo.country = this.movie.country;
       this.movietwo.description = this.movie.description;
       this.movietwo.overallRate = this.movie.overallRate;
       this.movieId = this.selectedMovie.movieId;

 this.service.updateProduct(this.movietwo,this.movieId).subscribe(
   (response) => {
     console.log('Product updated successfully');
     alert('Movie Updated Successfully');
     this.getMovies();
   },
   (error) => {
     console.log('Error updating product:', error);
   }
 );
}
// saveUpdatedProduct(): void {
//   this.movietwo.movieName = this.selectedMovie.movieName;
//   this.movietwo.movieDirector = this.movie.movieDirector;
//   this.movietwo.movieGenre = this.movie.movieGenre;
//   this.movietwo.movieReleaseDate = this.movie.movieReleaseDate;
//   this.movietwo.movieLanguage = this.movie.movieLanguage;
//   this.movietwo.duration = this.movie.duration;
//   this.movietwo.country = this.movie.country;
//   this.movietwo.description = this.movie.description;
//   this.movietwo.overallRate = this.movie.overallRate;

//   if (this.selectedMovie) {
//     this.movieId = this.selectedMovie.movieId; // Assign selected movie's movieId
//     this.service.updateProduct(this.movietwo, this.movieId).subscribe(
//       (response) => {
//         console.log('Movie updated successfully');
//         this.getMovies();
//       },
//       (error) => {
//         console.log('Error updating movie:', error);
//       }
//     );
//   }
// }


// saveUpdatedProduct(): void {
//   if (this.selectedMovie) {
//     const updatedMovie: MovieTwo = {
//       movieName:  this.movietwo.movieName,
//       movieDirector:  this.selectedMovie.movieDirector,
//       movieGenre:  this.selectedMovie.movieGenre,
//       movieReleaseDate:  this.selectedMovie.movieReleaseDate,
//       movieLanguage:  this.selectedMovie.movieLanguage,
//       duration:  this.selectedMovie.duration,
//       country:  this.selectedMovie.country,
//       description:  this.selectedMovie.description,
//       overallRate:  this.selectedMovie.overallRate,
//       imageFile: this.movietwo.imageFile
//     };

//     this.movieId = this.selectedMovie.movieId; // Assign selected movie's movieId

//     this.service.updateProduct(updatedMovie, this.movieId).subscribe(
//       (response) => {
//         console.log('Movie updated successfully');
//         this.getMovies();
//       },
//       (error) => {
//         console.log('Error updating movie:', error);
//       }
//     );
//   }
// }





}

 

