import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';
import {ToastServicesProvider } from '../../providers/toast-services/toast-services';
import {AlertServicesProvider } from '../../providers/alert-services/alert-services';
import {AuthServiceProvider } from '../../providers/auth-service';
import {UserServiceProvider } from '../../providers/user-service';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'page-perfil',
  templateUrl: 'perfil.html',
})
export class PerfilPage {
  profilePicture: 'https://adorable.io/avatar/200/bob';
  placeholderPicture: string;

user ={ id: "" , name: "", imageUrl: ""};

  constructor(private alertService: AlertServicesProvider,
    private authService: AuthServiceProvider,
    private userService:UserServiceProvider,
    private toastService: ToastServicesProvider,
    private storage:Storage, 
    private camera :Camera ) {
      
  }

  openGallerry():void{
    let cameraOptions={

      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
      destinationsType: this.camera.DestinationType.DATA_URL,
      quality:100,
      targetHeight:1000,
      targetHidth:1000,
      encondingType:this.camera.EncodingType.JPEG,
      correctDrientation:true
      };
      this.camera
      .getPicture(cameraOptions)
      .then(
      imageData => this.updateImage(imageData),
      err => this.toastService.presentToast("Error:"+err)

      );
  }
updateImage(value){

  this.profilePicture='data:image/jpeg:base64'+value;
  localStorage.setItem('imageUrl',this.profilePicture);
  this.storage.set('imageUrl',this.profilePicture);
  this.user.imageUrl = this.profilePicture;
  //this.userService.changePicture(this.user.id,this.profilePicture);
}
  
logOut(){}



  ionViewDidLoad() {
    console.log('ionViewDidLoad PerfilPage');
  }


}