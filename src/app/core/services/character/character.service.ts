import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { AppConfig } from 'src/app/config/app.config';

@Injectable({
  providedIn: 'root',
})
export class CharacterService {
  constructor(private http: HttpClient, private appConfig: AppConfig) {}

  getAllCharacters(offset: number, limit: number): Observable<any> {
    let params = new HttpParams();
    params = params.append('offset', offset.toString());
    params = params.append('limit', limit.toString());
    return this.http.get<any>(
      this.appConfig.data.base_url +
        `?limit=` +
        `${limit}` +
        `&offset=` +
        `${offset}` +
        `&ts=${this.appConfig.data.ts}&apikey=${this.appConfig.data.public_key}&hash=${this.appConfig.data.hash}`
    );
  }

  getCharacterById(id: number): Observable<any> {
    return this.http.get<any>(
      this.appConfig.data.base_url +
        `/${id}` +
        `?ts=${this.appConfig.data.ts}&apikey=${this.appConfig.data.public_key}&hash=${this.appConfig.data.hash}`
    );
  }
}
