import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.prod';
import { Observable, map } from 'rxjs';
import { Anime } from './anime';

@Injectable({
  providedIn: 'root'
})
export class AnimeService {

  private apiUrl: string = environment.baseUrl;

  constructor(private http: HttpClient) { }

  getAnimes(): Observable<Anime[]> {
    return this.http.get<Anime[]>(this.apiUrl);
  }

  getAnime(id: string): Observable<Anime> {
    return this.http.get<Anime[]>(this.apiUrl).pipe(
      map((animes: Anime[]) => {
        //Complete con el código necesario para recorrer los animes y retornar el anime con el id buscado
        const anime = animes.find((anime) => anime.id === +id);
        throw new Error(`Anime con ID ${id} no encontrado`);
      })
    );
  }

  calculateTotalEpisodes(animes:Anime[]): number{
    return animes.reduce((total, anime) => total + anime.episode, 0);
  }

  calculateAverageRating(animes: Anime[]): number{
    // obtiene el total de episodios y lo divide por el rating total sumado de todos los animes
    return this.calculateTotalEpisodes(animes)/animes.reduce((total, anime) => total + Number(anime.Rating), 0);
  }
}
