import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {IonicPage}from "ionic-angular";
import { PerfilPage } from '../perfil/perfil';
import { RelatorioPage } from '../relatorio/relatorio';
import { ScannerPage } from '../scanner/scanner';
import {ToastServicesProvider } from '../../providers/toast-services/toast-services';
import {AlertServicesProvider } from '../../providers/alert-services/alert-services';
import { Title } from '@angular/platform-browser/src/browser/title';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import{AuthServiceProvider} from'../../providers/auth-service';
@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController,
     public toast :ToastServicesProvider,
     public alert :AlertServicesProvider,
     public nav :NavController,
     public auth:AuthServiceProvider ) {

    const isAuthorized =this.auth.isAuthorized();
    if(!isAuthorized)this.nav.setRoot("LoginPage");

  }
   chamaPerfil (){
   this.navCtrl.push(PerfilPage);
 
  };
  chamaRelatorio (){
    this.navCtrl.push(RelatorioPage);
  
   };
   chamaPresenca (){
    this.navCtrl.push(ScannerPage);
  
   };
   
   chamaToast (){
this.toast.presentToast("oi");

   }
   chamaAlert(){

    this.alert.presentAlert("oi","");
   }
chamaAlerta2(){
  this.alert.presentAlertWithCallback("texto","msg");
}


}
