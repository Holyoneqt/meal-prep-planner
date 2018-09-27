import { NgModule } from '@angular/core';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { environment } from '../../environments/environment.prod';
import { indexReducers, metaReducers } from '../store/store-index';

@NgModule({
    imports: [
        StoreModule.forRoot(indexReducers, { metaReducers }),
        StoreRouterConnectingModule.forRoot(),
        StoreDevtoolsModule.instrument({
            name: 'Garden-Incremental Store DevTools',
            logOnly: environment.production
        }),
    ],
    exports: [
        StoreModule,
        StoreRouterConnectingModule,
        StoreDevtoolsModule,
    ],
})
export class AppStoreModule { }
