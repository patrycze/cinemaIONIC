import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import firebase from 'firebase';
import { ProfilePage } from '../../pages/profile/profile';

@Component({
  selector: 'facebook-service',
  templateUrl: 'facebook-service.html'
})
export class FacebookServiceComponent {

  protected FBLoginStatus: boolean = false;
  
  constructor(private fireBaseAuth: AngularFireAuth, public navCtrl: NavController) {

  }

  loginAndGetResults() {
    
    this.fireBaseAuth.auth.signInWithPopup(new firebase.auth.FacebookAuthProvider())
    .then((result) => {
      this.navCtrl.push(ProfilePage, { result: result})
      })
  }

}
