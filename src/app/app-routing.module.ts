import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharacterItemComponent } from './pages/character-item/character-item.component';
import { CharactersDetailsComponent } from './pages/characters-details/characters-details.component';
import { AboutSectionComponent } from './pages/about-section/about-section.component';
import { BlogComponent } from './pages/blog/blog.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

const routes: Routes = [
  { path: '', component: CharacterItemComponent },
  { path: 'about', component: AboutSectionComponent }, // Movido para cima
  { path: 'blog', component: BlogComponent }, // Movido para cima
  { path: ':id', component: CharactersDetailsComponent },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
