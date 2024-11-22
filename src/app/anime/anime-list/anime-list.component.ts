import { Component, OnInit } from '@angular/core';
import { Anime } from '../anime';
import { AnimeService } from '../anime.service';

@Component({
  selector: 'app-anime-list',
  templateUrl: './anime-list.component.html',
  styleUrls: ['./anime-list.component.css']
})
export class AnimeListComponent implements OnInit {

  selectedBAnime!: Anime;
  selected = false;
  animes: Array<Anime> = [];
  averageRating!: number;
  totalEpisodes!: number;

  constructor(private animeService: AnimeService) { }

  getAnimes(): void {
    this.animeService.getAnimes().subscribe((animes) => {
      this.animes = animes;
    });
  }

  onSelected(anime: Anime): void {
    this.selected = true;
    this.selectedBAnime = anime;
  }

  getTotalEpisodes(): void{
    this.totalEpisodes = this.animeService.calculateTotalEpisodes(this.animes)
  }

  getAverageRating(): void{
    this.averageRating = this.animeService.calculateAverageRating(this.animes)
  }

  ngOnInit() {
    this.getAnimes();
    this.getTotalEpisodes();
    this.getAverageRating();
  }

}
