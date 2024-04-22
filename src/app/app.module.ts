import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './shared/components/nav-bar/nav-bar.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { CharactersDetailsComponent } from './pages/characters-details/characters-details.component';
import { AppConfig } from './config/app.config';
import { CharacterItemComponent } from './pages/character-item/character-item.component';
import { SkeletonLoadingComponent } from './components/skeleton-loading/skeleton-loading.component';
import { BlogComponent } from './pages/blog/blog.component';
import { AboutSectionComponent } from './pages/about-section/about-section.component';
import { PaginationComponent } from './components/pagination/pagination.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    FooterComponent,
    CharactersDetailsComponent,
    CharacterItemComponent,
    SkeletonLoadingComponent,
    BlogComponent,
    AboutSectionComponent,
    PaginationComponent,
    PageNotFoundComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [AppConfig],
  bootstrap: [AppComponent],
})
export class AppModule {}
