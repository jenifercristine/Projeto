//provides
//native providers
//modules
//native modules
import { HomePageModule } from '../pages/home/home.module';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { PerfilPageModule } from '../pages/perfil/perfil.module';
import { LoginPageModule } from '../pages/login/login.module';
import { RelatorioPageModule } from '../pages/relatorio/relatorio.module';
import { ScannerPageModule } from '../pages/scanner/scanner.module';
import{BrowserModule} from '@angular/platform-browser';
import {ToastServicesProvider } from '../providers/toast-services/toast-services';
import {AlertServicesProvider } from '../providers/alert-services/alert-services';
export const PROVIDERS=[
    ToastServicesProvider,
    AlertServicesProvider
]
export const NATIVEPROVIDERS=[
    StatusBar,
    SplashScreen,
   

]
export const MODULES=[
    HomePageModule,
    PerfilPageModule,
    ScannerPageModule,
    RelatorioPageModule,
    LoginPageModule
    
]
export const NATIVEMODULES=[
  
    BrowserModule
]