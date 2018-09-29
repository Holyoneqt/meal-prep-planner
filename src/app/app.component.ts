import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireDatabase } from '@angular/fire/database';
import { Store } from '@ngrx/store';
import { auth } from 'firebase/app';

import { CoreState } from './store/store-index';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

    public sidenavOpen: boolean;
    public sidenavToggleIcon: string;
    public sidenavLinks: { display: string, route: string }[];
    
    public user: firebase.User;

    constructor(private store: Store<CoreState>, private afAuth: AngularFireAuth, private afDatabse: AngularFireDatabase) { }

    public ngOnInit(): void {
        this.afAuth.authState.subscribe(user => this.user = user);

        this.sidenavOpen = false;
        this.sidenavToggleIcon = 'reorder';
        this.sidenavLinks = [
            { display: 'Home', route: 'home' },
            { display: 'Foods Overview', route: 'foods' },
            { display: 'Week Planner', route: 'planner' },
        ];
    }

    public loginWithGoogle(): void {
        this.afAuth.auth.signInWithPopup(new auth.GoogleAuthProvider());
    }
    logout() {
        this.afAuth.auth.signOut();
    }

}
