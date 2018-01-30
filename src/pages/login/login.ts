import { Component } from '@angular/core';
import { IonicPage, NavController,LoadingController } from 'ionic-angular';
import{AuthServiceProvider} from'../../providers/auth-service';
import { HomePage } from '../home/home';

import {AlertServicesProvider } from '../../providers/alert-services/alert-services';
import { AlertController } from 'ionic-angular/components/alert/alert-controller';
/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
 user ={login:"",senha:""};

  constructor( 
    public auth:AuthServiceProvider ,
    public loging:LoadingController,
    public nav :NavController,
   public alert:AlertServicesProvider) {
    


  }

  register(){
 this.auth.login(this.user).subscribe(res=>{
console.log(res);

if(res ){

this.nav.setRoot(HomePage);
}else{

  this.alert.presentErrorAlert("");
  

}
 });
  
  }
}
