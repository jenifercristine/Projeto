
import { Injectable } from '@angular/core';
import { ToastController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { isUndefined } from 'ionic-angular/util/util';
import { HttpHeaders } from '@angular/common/http';
import { HttpParams } from '@angular/common/http';
import { TokenServicesProvider } from '../providers/token-services/token-services';
//import {isUndefined} from 'ionic-angular/utils/utils';
//import {uri}from '.../utils/constants';


@Injectable()
export class AuthServiceProvider {

  currentUser: Object;

  constructor(public http: HttpClient, private tokenServicesProvider: TokenServicesProvider) {}

  public isAuthorized() {
    const token = this.tokenServicesProvider.getAccessToken();
    return token ? true : false;
  }

  public getAccessToken() {
    return `Bearer ${this.tokenServicesProvider.getAccessToken()}`;
  }

  public buildToken(credentials) {
    //criando token
    const token = btoa(`mobile:alunos`);
    return token;
  }

  public login(credentials): Observable<any> {
    const uri = "http://curso-ferias-matera.herokuapp.com";
    const user = this.buildToken(credentials);

    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization: `Basic ${user}`

      })

    };
    const params = new HttpParams()
      .set("username", credentials.login)
      .append("password", credentials.senha)
      .append("grant_type", "password");
    return this.http.post(`${uri}/oauth/token`, params.toString(), httpOptions);
  }

  saveAccessData({ access_token }) {
    this.tokenServicesProvider.setAcessToken(access_token);

  }
  public logout(): void {
    this.tokenServicesProvider.clear();
    location.reload(true);

  }
  /*
  public login (credentials){
    if(credentials.login===null || credentials.senha===null){
    return Observable.throw("coloque seus dados");
    }else{
    return Observable.create(observer =>{
    let access:Boolean;
    const uri="http://curso-ferias.herokuapp.com";
    this.http
    .get(
      `${uri}/usuario?login=${
        credentials.login
      }&senha=${credentials.senha}`
    )
    .subscribe(res=>{
      if (res[0]){
        this.currentUser=res[0];
        access=true;
        localStorage.setItem("token","ok");
        this.storage.set("currentUser",this.currentUser);
      }else{
        access=false;
      }
    if(!isUndefined(access)){
    observer.next(access);
    observer.complete();
      }
    
    
    });
    
    });
    
     }
    */


}







