import { Component, OnInit } from '@angular/core';
import { User } from '@models/user.model';
import { UserService } from '@services/user/user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  constructor(private userService: UserService) { }
  public user: User;

  ngOnInit(): void {
    this.userService.currentUser$().subscribe({
      next: (user: User) => {
        this.user = user;
      },
      error: (erreur) => {
        console.log(erreur)
      }
    })
  }

}
