import { Component } from '@angular/core';
import { UserService } from '@services/user/user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent {
  constructor(private userService: UserService) { }

  public currentUser$ = this.userService.currentUser$();

}
