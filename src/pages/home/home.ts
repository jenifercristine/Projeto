import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {IonicPage}from "ionic-angular";
import { PerfilPage } from '../perfil/perfil';
import { RelatorioPage } from '../relatorio/relatorio';
import { ScannerPage } from '../scanner/scanner';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  
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
   

}
