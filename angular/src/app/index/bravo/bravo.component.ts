import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { LeaderboardUser } from '@models/leaderboard_user.model';
import { LeaderboardService } from '@services/leaderboard/leaderboard.service';
import { User } from '@models/user.model';
import { UserService } from '@services/user/user.service';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-bravo',
  templateUrl: './bravo.component.html',
  styleUrl: './bravo.component.css'
})
export class BravoComponent {
  constructor(private leaderboardService: LeaderboardService, public userService: UserService,
    private router: Router) { }
  public user: User;
  users$: Observable<LeaderboardUser[]>;
  popup: boolean = false
  selectedReponse: any = null
  public score = 0;

  ngOnInit() {
    this.score = parseInt(localStorage.getItem("score") ?? "0")
    this.userService.currentUser$().subscribe({
      next: (user: User) => {
        this.user = user;
      },
      error: (erreur) => {
        console.log(erreur)
      }
    })
    this.users$ = this.leaderboardService.leaderboard$()
  }
  onSelectReponse(reponse: any){
    this.popup = true
    this.selectedReponse = reponse
  }

  public goToHome(){
    this.router.navigate([''])
  }

}
