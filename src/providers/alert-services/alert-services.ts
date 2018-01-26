import { Injectable } from '@angular/core';
import { AlertController} from 'ionic-angular';

import { Button } from 'ionic-angular/components/button/button';

/*
  Generated class for the ProvidersProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AlertServicesProvider {

  constructor(private alertCtrl :AlertController ) {
  
  }


  presentAlert(msg,menssagem) {
    const alert = this.alertCtrl.create({
      title:'ola',
      subTitle: msg,
      buttons:[{
      text:'yes'

      },

      {
        text: 'cancel',
       
        }
    ]
    });
     return alert.present();
    
  }
  presentErrorAlert(menssagem: string){
return this.presentAlert("erro",menssagem);

  }
   
  presentAlertWithCallback(title: string,message: string):Promise<boolean> {
    return new Promise((resolve, reject)=>{
    const confirm =this.alertCtrl.create({
      title,
      message,
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            confirm.dismiss().then(res=> resolve(false));
         return false;
          }
        },
        {
          text: 'yes',
          handler: () => {
            confirm.dismiss().then(()=> resolve(true));
          return false;
          }
        }
      ]
    });
    return confirm.present();
  });
  
}


}