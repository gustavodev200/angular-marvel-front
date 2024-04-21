import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharactersDetailsComponent } from './pages/characters-details/characters-details.component';
import { CharacterItemComponent } from './pages/character-item/character-item.component';
import { BlogComponent } from './pages/blog/blog.component';
import { AboutSectionComponent } from './pages/about-section/about-section.component';

const routes: Routes = [
  { path: '', component: CharacterItemComponent },
  { path: ':id', component: CharactersDetailsComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'about', component: AboutSectionComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
