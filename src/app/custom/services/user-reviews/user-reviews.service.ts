import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserReviewsService {
  constructor(private http: HttpClient) {}

  getUserReviews(username: string): Observable<any[]> {
    const url = `https://api.example.com/users/${username}/reviews`;

    return this.http.get<any[]>(url).pipe(
      map((reviews) =>
        reviews.map((review) => ({
          author: review.author,
          text: review.content,
          rating: review.rating,
        }))
      )
    );
  }
}
