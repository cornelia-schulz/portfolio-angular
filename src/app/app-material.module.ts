import { NgModule } from '@angular/core';
import {
  MatButtonModule,
  MatToolbarModule,
  MatMenuModule,
  MatIconModule
} from '@angular/material'

@NgModule({
  imports: [
    MatButtonModule,
    MatToolbarModule,
    MatMenuModule,
    MatIconModule
  ],
  exports: [
    MatButtonModule,
    MatToolbarModule,
    MatMenuModule,
    MatIconModule
  ]
})

export class AppMaterialModule {}