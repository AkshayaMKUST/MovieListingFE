import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthenticationComponent } from './authentication/authentication.component';
import { HomeComponent } from './home/home.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { UserMovieComponentComponent } from './user-movie-component/user-movie-component.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminMovieComponentComponent } from './admin-movie-component/admin-movie-component.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    AuthenticationComponent,
    HomeComponent,
    UserDashboardComponent,
    UserMovieComponentComponent,
    AdminDashboardComponent,
    AdminMovieComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,FormsModule,HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
