import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '@services/auth/auth.service';
import { finalize } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  constructor(private authService: AuthService, private router: Router) { }

  public busyLogin = false;
  public email = '';
  public password = '';

  onSubmit(f: NgForm) {
    if (f.valid) {
      this.busyLogin = true;
      this.authService.login$(this.email, this.password)
        .pipe(finalize(() => { this.busyLogin = false }))
        .subscribe({
          next: () => {
            this.router.navigateByUrl('/admin')
          },
          error: (error) => {
            console.log(error)
          }
        });
    }
  }
}
