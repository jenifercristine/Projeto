import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';



import{PROVIDERS,NATIVEPROVIDERS,MODULES,NATIVEMODULES} from './app.imports'



@NgModule({
  declarations:[
    MyApp
  ],
  imports: [
 MODULES,
 NATIVEMODULES,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp
    
  ],
  providers: [
   PROVIDERS,
   NATIVEPROVIDERS,
    {provide: ErrorHandler, useClass: IonicErrorHandler},

  ]
})
export class AppModule {}
