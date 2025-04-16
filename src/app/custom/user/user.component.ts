import { Component, OnInit } from '@angular/core';
import { User } from '../services/user/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent implements OnInit {
  constructor(private userDetails: User) {}

  user: string = 'dummy user';
  userPosts: any[] = [];
  //userPosts is array of objects

  ngOnInit(): void {
    this.userDetails.getUserPosts(this.user).subscribe((posts) => {
      this.userPosts = posts;
    });
  }
}
