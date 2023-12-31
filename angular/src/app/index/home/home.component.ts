import { Component, OnInit } from '@angular/core';
import { AuthService } from '@services/auth/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor(public authService: AuthService) { }

  public isAuthenticated: boolean;
  ngOnInit(): void {
    this.isAuthenticated = this.authService.isAuthenticated;
  }
}
