import { Component } from '@angular/core';
import { MoviesapiService } from '../../moviesapi.service';
import { ActivatedRoute } from '@angular/router';
import { NgIf } from '@angular/common';
@Component({
  selector: 'app-movie',
  imports: [NgIf],
  templateUrl: './movie.component.html',
  styleUrl: './movie.component.css'
})
export class MovieComponent {
  movie: any;

  constructor(route: ActivatedRoute, service: MoviesapiService) {
    const id = route.snapshot.paramMap.get('id');
    if (id) {
      service.getMovieById(+id).subscribe(res =>{
        this.movie = res
        console.log(res)
        
      });
    }
  }
}
