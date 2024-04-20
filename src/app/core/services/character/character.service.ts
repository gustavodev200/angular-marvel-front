import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { AppConfig } from 'src/app/config/app.config';

@Injectable({
  providedIn: 'root',
})
export class CharacterService {
  constructor(private http: HttpClient, private appConfig: AppConfig) {}

  getAll(): Observable<any> {
    return this.http.get<any>(
      `${this.appConfig.apiURL}?ts=${this.appConfig.ts}&apikey=${this.appConfig.public_key}&hash=${this.appConfig.hash}`
    );
  }
}
