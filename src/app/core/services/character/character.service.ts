import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { AppConfig } from 'src/app/config/app.config';
import { ErrorHandlerService } from '../error-handler/error-handler.service';

@Injectable({
  providedIn: 'root',
})
export class CharacterService {
  constructor(
    private http: HttpClient,
    private appConfig: AppConfig,
    private errorHandler: ErrorHandlerService
  ) {}

  getAll(): Observable<any> {
    return this.http.get<any>(
      `${this.appConfig.apiURL}?ts=${this.appConfig.ts}&apikey=${this.appConfig.public_key}&hash=${this.appConfig.hash}`
    );
  }
}
