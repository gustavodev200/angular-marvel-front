import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './shared/components/nav-bar/nav-bar.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { CharactersDetailsComponent } from './pages/characters-details/characters-details.component';
import { CharacterCardComponent } from './components/character-card/character-card.component';
import { HeroSectionComponent } from './pages/hero-section/hero-section.component';
import { AppConfig } from './config/app.config';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    FooterComponent,
    CharactersDetailsComponent,
    CharacterCardComponent,
    HeroSectionComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [AppConfig],
  bootstrap: [AppComponent],
})
export class AppModule {}
