import { Injectable } from '@angular/core';
import { User } from '@models/user.model';
import { ApiService } from '@services/api/api.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(protected apiService: ApiService) { }

  currentUser$(): Observable<User> {
    return this.apiService.get("user");
  }
}
