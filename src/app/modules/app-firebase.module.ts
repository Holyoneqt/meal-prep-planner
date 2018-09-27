import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuth, AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireDatabase, AngularFireDatabaseModule } from '@angular/fire/database';

import { environment } from '../../environments/environment';

@NgModule({
    imports: [
        AngularFireModule.initializeApp(environment.firebase),
        AngularFireAuthModule,
        AngularFireDatabaseModule
    ],
    providers: [
        AngularFireAuth,
        AngularFireDatabase,
    ],
    exports: [
        AngularFireModule,
        AngularFireAuthModule,
        AngularFireDatabaseModule,
    ],
})
export class AppFirebaseModule { }
