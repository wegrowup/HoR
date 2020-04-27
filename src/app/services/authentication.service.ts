import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { tap } from 'rxjs/operators';
import { User } from '../model/user.model';
import { AuthResponseData } from '../model/authResponseData.model';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  user = new Subject<User>();

  constructor(private http: HttpClient) { }

  SignUp(email: string, password: string) {
    const signUpBody = {
      email: email,
      password: password,
      returnSecureToken: true
    }
    return this.http.post<AuthResponseData>('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAnUmVQqK1-DgHFZJ4rSErTi2zO-otkgv4',
      signUpBody).pipe(tap((responseData) => {
        const expirationDate = new Date(new Date().getTime() + +responseData.expiresIn * 1000);
        const user = new User(responseData.email, responseData.localId, responseData.idToken, expirationDate);
        this.user.next(user);
      }));
  }
}
