import { Component, OnInit } from '@angular/core';
import { UserReviewsService } from '../../services/user-reviews/user-reviews.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-user-reviews',
  templateUrl: './user-reviews.component.html',
  styleUrls: ['./user-reviews.component.scss'],
})
export class UserReviewsComponent {
  userName: string = '';
  userReviews$!: Observable<any[]>;

  constructor(private userReviewsService: UserReviewsService) {}

  // ngOnInit(): void {
  // }

  fetchReviews() {
    this.userReviews$ = this.userReviewsService.getUserReviews(this.userName);
  }
}
