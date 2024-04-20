import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-characters-details',
  templateUrl: './characters-details.component.html',
  styleUrls: ['./characters-details.component.css'],
})
export class CharactersDetailsComponent implements OnInit {
  @Input() characters!: any[];

  constructor() {}

  ngOnInit(): void {}
}
