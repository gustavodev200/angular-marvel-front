import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ErrorHandlerService {
  handle(error: any) {
    console.error('An error occurred', error);
    const err = new Error(error);
    throwError(() => err);
  }
}
