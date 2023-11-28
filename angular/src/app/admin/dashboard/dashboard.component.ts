import { OnInit, Component } from '@angular/core';
import { User } from '@models/user.model';
import { AuthService } from '@services/auth/auth.service';
import { UserService } from '@services/user/user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  constructor(private userService: UserService) { }
  public currentUser: User;

  ngOnInit(): void {
    this.userService.currentUser$().subscribe((user: User) => {
      this.currentUser = user;
    });
  }
}
