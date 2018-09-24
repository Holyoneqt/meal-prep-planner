import { NgModule } from '@angular/core';
import {
    MatButtonModule,
    MatDialogModule,
    MatDividerModule,
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
        MatDividerModule,
        MatDialogModule,
    ],
})
export class AppMaterialModule { }
