import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FoodsComponent } from './../routes/foods/foods.component';
import { HomeComponent } from './../routes/home/home.component';
import { PlannerComponent } from './../routes/planner/planner.component';
import { SettingsComponent } from './../routes/settings/settings.component';

const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'foods', component: FoodsComponent },
    { path: 'planner', component: PlannerComponent },
    { path: 'settings', component: SettingsComponent },
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ],
})
export class AppRoutingModule { }
