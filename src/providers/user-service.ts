
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {ScannerServiceProvider} from '../providers/scanner-services';
import {OnInit} from '@angular/core'
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { AlertController } from 'ionic-angular/components/alert/alert-controller';


@Injectable()
export class UserServiceProvider {
 currentUser:object;
  constructor( public http:HttpClient,private storage:Storage) {
  
  }
changePicture(id,img){
 let uri='https://curso-ferias.herokuapp.com/usuario/';
 let body={

   urlfoto :img
 };
this.http.patch(uri,body);
}
getUserData(){
return this.storage.get("currentUser");
}
}
