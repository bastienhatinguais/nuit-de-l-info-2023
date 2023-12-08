import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  users = [
    { id: 1, username: 'user1' },
    { id: 2, username: 'user2' },
    { id: 3, username: 'user3' },
    { id: 4, username: 'user4' },
    { id: 5, username: 'user5' },
    { id: 6, username: 'user6' },
    { id: 7, username: 'user7' },
    { id: 8, username: 'user8' },
    { id: 9, username: 'user9' },
    { id: 10, username: 'user10' },
  ]
}