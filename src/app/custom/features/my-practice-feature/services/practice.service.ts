import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PracticeService {
  constructor() {}

  getMessage(): string {
    return `Hello From PracticeService!`;
  }
}
