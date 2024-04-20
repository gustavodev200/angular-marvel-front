import { Component, OnInit } from '@angular/core';
import { CharacterService } from 'src/app/core/services/character/character.service';

@Component({
  selector: 'app-hero-section',
  templateUrl: './hero-section.component.html',
  styleUrls: ['./hero-section.component.css'],
})
export class HeroSectionComponent implements OnInit {
  characters: any[] = [];
  constructor(private characterService: CharacterService) {
    this.getAllCharacters();
  }

  ngOnInit(): void {}

  getAllCharacters() {
    this.characterService.getAll().subscribe((data) => {
      this.characters = data.data.results;
    });
  }
}
