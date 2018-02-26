import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpModule,JsonpModule } from '@angular/http';

import { MyApp } from './app.component';
import { UserServiceProvider } from '../providers/user-service/user-service';

@NgModule({ 
  declarations: [
    MyApp
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp,{tabsHideOnSubPages:'true'}),
    HttpModule,JsonpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp
  ], 
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    UserServiceProvider
  ]
})
export class AppModule {}
