import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class User {
  constructor(private http: HttpClient) {}

  getUserPosts(userName: string): Observable<any> {
    const url = `https://api.example.com/user/${userName}`;
    return this.http.get<any>(url);
  }
}
