import { Component, OnInit } from '@angular/core';
import { catchError } from 'rxjs';
import { CharacterService } from 'src/app/core/services/character/character.service';
import { ErrorHandlerService } from 'src/app/core/services/error-handler/error-handler.service';

@Component({
  selector: 'app-character-item',
  templateUrl: './character-item.component.html',
  styleUrls: ['./character-item.component.css'],
})
export class CharacterItemComponent implements OnInit {
  characters: any[] = [];
  totalCharacters: number = 0;
  limit: number = 10;
  offset: number = 0;
  searchTerm: string = '';
  loading: boolean = false;

  constructor(
    private characterService: CharacterService,
    private errorHandler: ErrorHandlerService
  ) {
    this.getAllCharacters();
  }

  ngOnInit(): void {}

  getAllCharacters() {
    this.characterService
      .getAllCharacters(this.offset, this.limit)
      .pipe(catchError(async (error) => this.errorHandler.handle(error)))
      .subscribe((data) => {
        this.totalCharacters = data.data.total;
        this.characters = data.data.results;
      });
  }

  onPageChange(event: any): void {
    this.offset = event.pageIndex * this.limit;
    this.getAllCharacters();
  }

  onPreviousPage(): void {
    if (this.offset - this.limit >= 0) {
      this.offset -= this.limit;
      this.getAllCharacters();
    }
  }

  onNextPage(): void {
    if (this.offset + this.limit < this.totalCharacters) {
      this.offset += this.limit;
      this.getAllCharacters();
    }
  }
}
