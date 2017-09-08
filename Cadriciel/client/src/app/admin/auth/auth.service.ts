import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import {Message} from '../../../../../commun/communication/message';

@Injectable()
export class AuthService {
  validPassword: boolean = false;
  error: boolean = false;
  password: string;

  constructor(private http: Http) { }

  private authenticateUrl = 'http://localhost:3000/auth';
  private changePasswordUrl = 'http://localhost:3000/change-password'

  public authenticate(password: string): Promise<boolean> {
    let body = { password: password };
    return this.http.post(this.authenticateUrl, body)
    .toPromise()
    .then(response => 
    (response.json() as Message<boolean>).body)
    .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

  public changePassword(newPassword: string): Promise<any> {
    let body = { newPassword: newPassword };
    return this.http.put(this.changePasswordUrl, body)
    .toPromise().
    then(response => 
    (response.json() as Message<boolean>).body)
    .catch(this.handleError);
  }

}