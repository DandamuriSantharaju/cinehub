import { Component} from '@angular/core';
import { MoviesapiService } from '../../moviesapi.service';
import { CommonModule, NgForOf } from '@angular/common';
import {FormsModule} from '@angular/forms'
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-home',
  imports: [NgForOf,CommonModule,FormsModule,RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  popularmovies: any=[]
  data:any
  selectdGenreId:number=0;
  serchmoviename=''
  isshow=false
  constructor(public ps:MoviesapiService){
    this.ps.getpopulamovies().subscribe((res:any)=>
    {
      this.popularmovies=res.results
      // console.log(res)
    })
    this.ps.getgenresmovies().subscribe((res:any)=>
      {
        this.data=res.genres;
        console.log(res);
      }
    )
  }
  
  onGenreChange(){
      this.ps.getgener(this.selectdGenreId).subscribe((res: any) => this.popularmovies = res.results);
  }
  searchmovies(){
    this.ps.getsearch(this.serchmoviename).subscribe((res:any)=>
      {
        this.popularmovies=res.results
        console.log(res)
      })
  }
//   toggleDetails(movie: any) {
//     movie.isshow = !movie.isshow;
// }
}
