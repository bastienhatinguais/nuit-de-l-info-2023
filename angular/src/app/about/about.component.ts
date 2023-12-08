import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LeaderboardService } from '@services/leaderboard/leaderboard.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { LeaderboardUser } from '@models/leaderboard_user.model';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  constructor(private leaderboardService: LeaderboardService, private router: Router) { }

  users$: Observable<LeaderboardUser[]>;

  ngOnInit() {
    this.users$ = this.leaderboardService.leaderboard$()
  }
}
