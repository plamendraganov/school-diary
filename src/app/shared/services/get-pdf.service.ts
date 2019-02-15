import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GetPdfService {

  constructor() { }

  getPdf(): string {
    return '/assets/pdf-test.pdf';
  }
}
