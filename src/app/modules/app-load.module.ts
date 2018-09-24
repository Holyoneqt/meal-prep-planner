import { HttpClientModule } from '@angular/common/http';
import { APP_INITIALIZER, NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppLoadService } from '../services/app-load.service';

export function initApp(appLoadService: AppLoadService) {
    return () => appLoadService.initializeApp();
}

@NgModule({
  imports: [ HttpModule, HttpClientModule ],
  providers: [
    AppLoadService,
    { provide: APP_INITIALIZER, useFactory: initApp, deps: [ AppLoadService ], multi: true }
  ]
})
export class AppLoadModule { }
