import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { ApiService } from '../services/api/api.service';
import { StateService } from '../services/state/state.service';
import { User } from '../model/user.model';

@Injectable({ providedIn: 'root' })
export class UserResolver implements Resolve<Observable<User[]> | any> {
  constructor(private apiService: ApiService, private stateService: StateService) {}

  resolve(): Observable<User[] | any> | Promise<User[]> | User[] {
    if(this.stateService.Users && this.stateService.Users?.length > 0){
      return this.stateService.Users!;
    } else {
      return this.apiService.getUsers();
    }
  }
}