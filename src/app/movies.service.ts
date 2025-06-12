import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  /*Para las pelis*/
  url =
    'https://api.themoviedb.org/3/search/movie?api_key=bdddb1edc98dc169584e175d1ee3c2d1&query=';

  /**para las series*/
  SeriesUrl =
    'https://api.themoviedb.org/3/search/tv?api_key=bdddb1edc98dc169584e175d1ee3c2d1&query&language=en-US&page=1&include_adult=false&query=';

  constructor(private http: HttpClient) {}
  /***************  get query para la búsqueda de peliculas ***********/
  /*
  /****************************************************************** */
  getQuery(query: string) {
    const url = this.url + query;
    //Agrega nuevos parámetros a la url que para interactuar con los endpoints de la API
    console.log('url completa= ' + url);
    return this.http.get(url);
  }

  /***************  get query para la búsqueda de series **************/
  /*
  /****************************************************************** */
  SeriesgetQuery(Seriesquery: string) {
    const SeriesUrl = this.SeriesUrl + Seriesquery;
    //Agrega nuevos parámetros a la url que para interactuar con los endpoints de la API
    console.log('SeriesUrl completa= ' + SeriesUrl);
    return this.http.get(SeriesUrl);
  }
}
