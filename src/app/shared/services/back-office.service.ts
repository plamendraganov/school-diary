import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BackOfficeService {

  constructor(private http: HttpClient) { }

  getStudentsInClass() {
    return this.http.get('https://api.myjson.com/bins/pog7u');
  }
}
