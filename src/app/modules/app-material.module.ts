import { NgModule } from '@angular/core';
import {
    MatButtonModule,
    MatFormFieldModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatSidenavModule,
    MatTableModule,
    MatToolbarModule,
} from '@angular/material';

@NgModule({
    exports: [
        MatFormFieldModule,
        MatButtonModule,
        MatToolbarModule,
        MatIconModule,
        MatSidenavModule,
        MatInputModule,
        MatListModule,
        MatTableModule,
        MatGridListModule,
    ],
})
export class AppMaterialModule { }
