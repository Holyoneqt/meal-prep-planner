import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

import { DbService } from './db.service';
import { StorageService } from './storage.service';

@Injectable()
export class AppLoadService {

    constructor(private storageService: StorageService, private afAuth: AngularFireAuth, private db: DbService) { }

    initializeApp(): Promise<{}> {
        return new Promise(
            (resolve, reject) => {
                this.db.load();
                const sub = this.afAuth.authState.subscribe(user => {
                    this.afAuth.auth.setPersistence('local');
                    
                    this.storageService.syncLocalStorageWithStore();
                    sub.unsubscribe();
                    resolve();
                });
            }
        );
    }

}
