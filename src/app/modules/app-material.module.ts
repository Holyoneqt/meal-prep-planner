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
    MatSelectModule,
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
        MatSelectModule,
    ],
})
export class AppMaterialModule { }
