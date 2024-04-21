import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { CharacterService } from 'src/app/core/services/character/character.service';

@Component({
  selector: 'app-characters-details',
  templateUrl: './characters-details.component.html',
  styleUrls: ['./characters-details.component.css'],
})
export class CharactersDetailsComponent implements OnInit {
  characters?: any[];
  noDescription: string = 'No description available';

  constructor(
    private characterService: CharacterService,
    private route: ActivatedRoute
  ) {
    this.getCharacterById();
  }

  ngOnInit(): void {}

  getCharacterById(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.characterService
      .getCharacterById(id)
      .subscribe((characters) => (this.characters = characters.data.results));
  }
}
