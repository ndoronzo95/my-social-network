import { Component, Input } from '@angular/core';
import { User } from '../api/models';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {
  @Input() user!: User;
  mockPost = { id: 0, title: 'hello', body:'world', userId: 1 }
}
