import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroSectionComponent } from './pages/hero-section/hero-section.component';
import { CharactersDetailsComponent } from './pages/characters-details/characters-details.component';

const routes: Routes = [
  { path: '', component: HeroSectionComponent },
  { path: 'about', component: CharactersDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
