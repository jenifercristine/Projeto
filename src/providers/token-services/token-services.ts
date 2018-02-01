import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the TokenProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class TokenServicesProvider {

  public getAccessToken() {
    return localStorage.getItem("accessToken");
  }
  public setAcessToken(token: string): TokenServicesProvider {

    localStorage.setItem("accessToken", token);
    return this;
  }
  public clear() {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
  }

}
