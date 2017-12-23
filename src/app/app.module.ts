import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuth } from  'angularfire2/auth';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { FacebookServiceComponent } from '../components/facebook-service/facebook-service';
import { ProfilePage } from '../pages/profile/profile';

const fire = {
  apiKey: "AIzaSyDXZyIlRxdvROsWDYzgCPC4Xtv0SsH89yo",
  authDomain: "facebook-login-bb4a7.firebaseapp.com",
  databaseURL: "https://facebook-login-bb4a7.firebaseio.com",
  projectId: "facebook-login-bb4a7",
  storageBucket: "facebook-login-bb4a7.appspot.com",
  messagingSenderId: "278638417906"
}

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ProfilePage,
    FacebookServiceComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(fire),
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    FacebookServiceComponent,
    HomePage,
    ProfilePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    AngularFireAuth,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
