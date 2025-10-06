import {Injectable, Signal, signal} from '@angular/core';
import {User} from '../interfaces/user.interface';
import {Observable, of} from 'rxjs';

@Injectable()
export class AuthService {
  private _user = signal<User | null>(null);

  get currentUser(): Signal<User | null> {
    return this._user.asReadonly();
  }

  login(username: string, password: string): Observable<boolean> {
    if (username === 'admin' && password === 'admin') {
      this._user.set({ id: 1, name: 'Admin', role: 'superadmin' });
      return of(true);
    }
    return of(false);
  }
}
