import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Post, User } from '../api/models';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent {
  user!: User;
  posts: Post[] = [];

  constructor(private activatedRoute: ActivatedRoute) {
    this.user = this.activatedRoute.snapshot.data['user'];
    this.posts = this.activatedRoute.snapshot.data['posts'];
  }
}
