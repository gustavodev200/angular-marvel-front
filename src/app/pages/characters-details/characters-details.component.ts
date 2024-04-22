import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { CharacterService } from 'src/app/core/services/character/character.service';

@Component({
  selector: 'app-characters-details',
  templateUrl: './characters-details.component.html',
  styleUrls: ['./characters-details.component.css'],
})
export class CharactersDetailsComponent implements OnInit {
  characters?: any[];

  constructor(
    private characterService: CharacterService,
    private route: ActivatedRoute
  ) {
    this.getCharacterById();
    this.getIdFromRoute();
  }

  ngOnInit(): void {}

  getIdFromRoute() {
    return Number(this.route.snapshot.paramMap.get('id'));
  }

  getCharacterById(): void {
    this.characterService
      .getCharacterById(this.getIdFromRoute())
      .subscribe((characters) => (this.characters = characters.data.results));
  }
}
