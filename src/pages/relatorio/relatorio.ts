import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {RelatorioServiceProvider } from '../../providers/relatorio-services/relatorio-services';
import { UserServiceProvider } from '../../providers/user-service';
import {OnInit} from '@angular/core';
import { ImprimirPage } from '../imprimir/imprimir';

/**
 * Generated class for the RelatorioPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-relatorio',
  templateUrl: 'relatorio.html',
})
export class RelatorioPage {
items:Array<{
  titulo:string;
  logo:string;
  detalhes:string;
  icon:string;
  abrirInformacoes:boolean;
}>;
  angular:any;
  ionic:any;
  rest:any;

      constructor(public navCtrl: NavController, 
    public navParams: NavParams,
  private userService:UserServiceProvider,
private relatorioService:RelatorioServiceProvider) {}


  ionViewDidLoad() {
    console.log('ionViewDidLoad RelatorioPage');
  }


  ngOnInit(){
this.items=[];
this.userService.getUserData().then(res=>{
const user:any =res;

this.relatorioService.getData(user.id,"1").subscribe(res=>{
this.rest=res.json();
this.relatorioService.getData(user.id,"2").subscribe(res=>{
this.rest=res.json();
this.relatorioService.getData(user.id,"3").subscribe(res=>{
this.rest=res.json();



  this.items.push(
  {
    titulo:"Angular",
    detalhes:`Total de presenças:${this.angular.length}`,
    logo:"logo-angular",
    icon:"ios-add-circle-outline",
    abrirInformacoes:false

  },
  {
    titulo:"java",
    detalhes:`Total de presenças:${this.angular.length}`,
    logo:"ios-cafe",
    icon:"ios-add-circle-outline",
    abrirInformacoes:false

  },
  {
    titulo:"ionic",
    detalhes:`Total de presenças:${this.angular.length}`,
    logo:"ionic",
    icon:"ios-add-circle-outline",
    abrirInformacoes:false

  }

);

});
});
});

});
}

abreFecha(data){
if(data.abrirInformacoes){
data.abrirInformacoes=false;
  data.icon="ios-add-circle-outline";
}else{

  data.abrirInformacoes=true;

  data.icon="ios-remove-circle-outline";
}

}

imprimir(){
  this.navCtrl.push(ImprimirPage,{tems:this.items});
}




}







