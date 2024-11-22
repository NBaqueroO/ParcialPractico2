import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnimeListComponent } from './anime/anime-list/anime-list.component';
import { AnimeModule } from './anime/anime.module';

const routes: Routes = [
  { path: '', component: AnimeListComponent},
  { path: 'animes', loadChildren: () => import('./anime/anime.module').then(m => AnimeModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
