import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { AppFirebaseModule } from './modules/app-firebase.module';
import { AppLoadModule } from './modules/app-load.module';
import { AppMaterialModule } from './modules/app-material.module';
import { AppRoutingModule } from './modules/app-routing.module';
import { AppStoreModule } from './modules/app-store.module';
import { CreateFoodDialogComponent } from './routes/foods/components/create-food-dialog/create-food-dialog.component';
import { FoodsComponent } from './routes/foods/foods.component';
import { HomeComponent } from './routes/home/home.component';
import { SelectFoodDialogComponent } from './routes/planner/components/select-food-dialog/select-food-dialog.component';
import { PlannerComponent } from './routes/planner/planner.component';
import { SettingsComponent } from './routes/settings/settings.component';
import { AppLoadService } from './services/app-load.service';
import { DbService } from './services/db.service';
import { FoodsService } from './services/foods.service';
import { StorageService } from './services/storage.service';
import { WeekService } from './services/week.service';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        SettingsComponent,
        FoodsComponent,
        CreateFoodDialogComponent,
        PlannerComponent,
        SelectFoodDialogComponent,
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        FormsModule,

        AppFirebaseModule,
        AppRoutingModule,
        AppStoreModule,
        AppMaterialModule,
        AppLoadModule,
    ],
    providers: [
        AppLoadService,
        StorageService,
        DbService,
        FoodsService,
        WeekService,
    ],
    entryComponents: [
        CreateFoodDialogComponent,
        SelectFoodDialogComponent,
    ],
    bootstrap: [ AppComponent ]
})
export class AppModule { }
