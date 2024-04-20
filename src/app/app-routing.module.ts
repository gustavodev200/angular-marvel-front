import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharactersDetailsComponent } from './pages/characters-details/characters-details.component';
import { CharacterItemComponent } from './pages/character-item/character-item.component';

const routes: Routes = [
  { path: '', component: CharacterItemComponent },
  { path: ':id', component: CharactersDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
