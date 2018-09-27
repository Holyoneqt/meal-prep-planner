import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

import { StorageService } from './storage.service';

@Injectable()
export class AppLoadService {

    constructor(private storageService: StorageService, private afAuth: AngularFireAuth) { }

    initializeApp(): Promise<{}> {
        return new Promise(
            (resolve, reject) => {
                this.afAuth.auth.setPersistence('local');

                this.storageService.syncLocalStorageWithStore();
                resolve();
            }
        );
    }

}
