import { Component, Input } from '@angular/core';
import { Post, User } from '../api/models';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {
  @Input() user!: User;
  @Input() posts: Post[] = [];
}
