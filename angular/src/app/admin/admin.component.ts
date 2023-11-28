import { Component } from '@angular/core';
import { AuthService } from '@services/auth/auth.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
})
export class AdminComponent {
  constructor(private authService: AuthService) { }

  logout() {
    this.authService.logout$().subscribe(
      () => { }
    );
  }
}
