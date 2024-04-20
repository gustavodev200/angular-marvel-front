import { Component, OnInit } from '@angular/core';
import { catchError } from 'rxjs';
import { CharacterService } from 'src/app/core/services/character/character.service';
import { ErrorHandlerService } from 'src/app/core/services/error-handler/error-handler.service';

@Component({
  selector: 'app-hero-section',
  templateUrl: './hero-section.component.html',
  styleUrls: ['./hero-section.component.css'],
})
export class HeroSectionComponent implements OnInit {
  characters: any[] = [];

  constructor(
    private characterService: CharacterService,
    private errorHandler: ErrorHandlerService
  ) {
    this.getAllCharacters();
  }

  ngOnInit(): void {}

  getAllCharacters() {
    this.characterService
      .getAll()
      .pipe(catchError(async (error) => this.errorHandler.handle(error)))
      .subscribe((data) => (this.characters = data.data.results));
  }
}
