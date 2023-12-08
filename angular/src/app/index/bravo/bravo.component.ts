import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { LeaderboardUser } from '@models/leaderboard_user.model';
import { LeaderboardService } from '@services/leaderboard/leaderboard.service';

@Component({
  selector: 'app-bravo',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './bravo.component.html',
  styleUrl: './bravo.component.css'
})
export class BravoComponent {
  constructor(private leaderboardService: LeaderboardService) { }

  users$: Observable<LeaderboardUser[]>;
  popup: boolean = false
  selectedReponse: any = null
  ngOnInit() {
    this.users$ = this.leaderboardService.leaderboard$()
  }
  onSelectReponse(reponse: any){
    this.popup = true
    this.selectedReponse = reponse
  }

}
