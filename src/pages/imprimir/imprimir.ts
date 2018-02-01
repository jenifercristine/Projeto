import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {RelatorioPage} from '../relatorio/relatorio';
/**
 * Generated class for the ImprimirPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-imprimir',
  templateUrl: 'imprimir.html',
})
export class ImprimirPage {
public ItensParam;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  if(navParams.get("items")){

    this.ItensParam=navParams.get("items");
  }
  
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ImprimirPage');
  }

  mostrar(){}
}
