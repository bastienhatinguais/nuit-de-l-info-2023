import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { finalize } from 'rxjs';
import { FormsModule } from '@angular/forms';
import { RegisterService } from '@services/register/register.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  constructor(private registerService: RegisterService, private router: Router) {}
  public busyRegister = false;
  public email = '';
  public name = '';
  public password = '';
  public password_confirmation = '';

  onSubmit(f: NgForm) {
    if (f.valid) {
      this.busyRegister = true;
      this.registerService.register$(this.name, this.email, this.password, this.password_confirmation)
        .pipe(finalize(() => { this.busyRegister = false }))
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
