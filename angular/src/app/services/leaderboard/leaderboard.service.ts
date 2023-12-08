import { Injectable } from '@angular/core';
import { LeaderboardUser } from '@models/leaderboard_user.model';
import { ApiService } from '@services/api/api.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LeaderboardService {

  constructor(protected apiService: ApiService) { }

  leaderboard$(): Observable<Array<LeaderboardUser>> {
    return this.apiService.get("top-rank");
  }
}
