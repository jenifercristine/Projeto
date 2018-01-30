import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {ScannerServiceProvider} from '../../providers/scanner-services';
import {OnInit} from '@angular/core'
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { AlertController } from 'ionic-angular/components/alert/alert-controller';
import { UserServiceProvider } from '../../providers/user-service';

/**
 * Generated class for the ScannerPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-scanner',
  templateUrl: 'scanner.html',
})
export class ScannerPage {
barcodeData:any;
currentUser:any;

  constructor( public navCtrl:NavController,public alert:AlertController,public barcodeScanner:BarcodeScanner,public userService:UserServiceProvider,public ScannerServiceProvider:ScannerServiceProvider) {


  }
  ngOnInit(){

    this.userService.getUserData().then(res=>(this.currentUser =res));
  }
  scan(){
const options={
  preferFrontCamera:false,
  showFlipCameraButton:true,
  showTorchButton:true,
  torchOn:false,
  prompt:"",
  resultDisplayDuration:500,
  formats:"QR_CODE,PDF_417",
  orientation:"",

  disableSuccessBeep:true,
  disableAnimations:false
};

this.barcodeScanner
.scan(options)
.then (data=>{
this.barcodeData=data;
const id=this.currentUser.id;
const disciplina =this.barcodeData.idAluno = "2";
this.ScannerServiceProvider.postData(id,disciplina).subscribe(res=> {
  console.log(res);
  const alert = this.alert.create({
    title:'ola',
    subTitle: 'teste',
    buttons:['ok']
  });
   alert.present();
  
});

})




}





  
ionViewDidLoad() {
  console.log('ionViewDidLoad ScannerPage');
}


}
