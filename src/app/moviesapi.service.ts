import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class MoviesapiService {

  constructor(public ms:HttpClient) {}
  getpopulamovies(){
      return this.ms.get("https://api.themoviedb.org/3/movie/popular?api_key=c9a65fdfc6a21025a75592ba60483ea1");
  }
  getgenresmovies(){
    return this.ms.get("https://api.themoviedb.org/3/genre/movie/list?api_key=c9a65fdfc6a21025a75592ba60483ea1&language=en-US")
  }
  getgener(genreId:number){
    
  return this.ms.get(`https://api.themoviedb.org/3/discover/movie?api_key=c9a65fdfc6a21025a75592ba60483ea1&language=en-US&with_genres=${genreId}`)
  }
  getsearch(query:string){
    return this.ms.get(`https://api.themoviedb.org/3/search/movie?api_key=c9a65fdfc6a21025a75592ba60483ea1&query=${query}`)
  }
  getMovieById(id: number) {
    return this.ms.get(`https://api.themoviedb.org/3/movie/${id}?api_key=c9a65fdfc6a21025a75592ba60483ea1`);
  }
}
