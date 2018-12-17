import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

@Component({
  selector: 'bs-navbar',
  templateUrl: './bs-navbar.component.html',
  styleUrls: ['./bs-navbar.component.css']
})
export class BsNavbarComponent {
  user: firebase.User ;

  constructor(public afAuth: AngularFireAuth) { 
    this.afAuth.authState.subscribe( user => this.user = user);
  }

  logout(){
    this.afAuth.auth.signOut();
  }

}
