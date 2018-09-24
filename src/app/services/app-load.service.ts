import { Injectable } from '@angular/core';

import { StorageService } from './storage.service';

@Injectable()
export class AppLoadService {

    constructor(private storageService: StorageService) { }

    initializeApp(): Promise<{}> {
        return new Promise(
            (resolve, reject) => {
                this.storageService.syncLocalStorageWithStore();
                resolve();
            }
        );
    }

}
