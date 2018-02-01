//provides
//native providers
//modules
//native modules
import { HomePageModule } from '../pages/home/home.module';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { PerfilPageModule } from '../pages/perfil/perfil.module';
import { LoginPageModule } from '../pages/login/login.module';
import { ImprimirPageModule } from '../pages/imprimir/imprimir.module';
import { Camera} from '@ionic-native/camera';
import { ScannerPageModule } from '../pages/scanner/scanner.module';
import{BrowserModule} from '@angular/platform-browser';
import {ToastServicesProvider } from '../providers/toast-services/toast-services';
import {AlertServicesProvider } from '../providers/alert-services/alert-services';
import {AuthServiceProvider } from '../providers/auth-service';
import {UserServiceProvider } from '../providers/user-service';
import {RelatorioServiceProvider } from '../providers/relatorio-services/relatorio-services';
import { IonicStorageModule } from '@ionic/storage';
import {ScannerServiceProvider} from '../providers/scanner-services';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { RelatorioPageModule } from '../pages/relatorio/relatorio.module';

export const PROVIDERS=[
    ToastServicesProvider,
    AlertServicesProvider,
    AuthServiceProvider,
    UserServiceProvider,
    RelatorioServiceProvider

]
export const NATIVEPROVIDERS=[
    StatusBar,
    SplashScreen,
    ScannerServiceProvider,
    HttpClient

   

]
export const MODULES=[
    HomePageModule,
    PerfilPageModule,
    ScannerPageModule,
    RelatorioPageModule,
    LoginPageModule,
    
]
export const NATIVEMODULES=[
  
    BrowserModule,
    IonicStorageModule.forRoot(),
    HttpClientModule,
    HttpModule,
    Camera
]