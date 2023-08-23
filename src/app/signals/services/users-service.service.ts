import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, map, tap } from 'rxjs';
import { SingleUserResponse, User } from '../interfaces/user-request.interface';

@Injectable({
  providedIn: 'root'
})
export class UsersServiceService {

  //
  // Private properties
  //

  private _httpInject = inject(HttpClient);

  private baseUrl = 'https://reqres.in/api/users';

  //
  // Lyfeclicle
  //

  constructor() { }

  //
  // Public methods
  //

  public getUserById(id: number): Observable<User> {
    return this._httpInject.get<SingleUserResponse>(`${this.baseUrl}/${id}`)
      .pipe(
        map((response: SingleUserResponse) => response.data), // response.data == User
        tap(console.log)
      );
  }

}
