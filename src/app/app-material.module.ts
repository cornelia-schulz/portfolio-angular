import { NgModule } from '@angular/core';
import {
  MatButtonModule,
  MatToolbarModule,
  MatMenuModule,
  MatIconModule,
  MatGridListModule,
  MatInputModule,
  MatDialogModule,
} from '@angular/material'

@NgModule({
  imports: [
    MatButtonModule,
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
    MatGridListModule,
    MatInputModule
  ],
  exports: [
    MatButtonModule,
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
    MatGridListModule,
    MatInputModule,
    MatDialogModule
  ]
})

export class AppMaterialModule {}