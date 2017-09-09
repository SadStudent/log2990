import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import {Message} from '../../../../../commun/communication/message';

@Injectable()
export class AuthService {
  private _isAdmin;
  get isAdmin() {
    return this._isAdmin;
  }
  private authenticateUrl = 'http://localhost:3000/auth';
  private changePasswordUrl = 'http://localhost:3000/change-password'

  constructor(private http: Http) {
    this._isAdmin = false;
  }

  public connect(password: string): Promise<boolean> {
    let body = { password: password };
    return this.http.post(this.authenticateUrl, body)
    .toPromise()
    .then(response => {
      this._isAdmin = (response.json() as Message<boolean>).body;
      return this.isAdmin;
    })
    .catch(this.handleError);
  }

  public disconnect(): void {
    this._isAdmin = false;
  }

  public changePassword(newPassword: string): Promise<boolean> {
    let body = { newPassword: newPassword };
    return this.http.put(this.changePasswordUrl, body)
    .toPromise().
    then(response => 
    (response.json() as Message<boolean>).body)
    .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

}