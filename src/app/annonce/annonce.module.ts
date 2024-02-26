import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListannonceComponent } from './listannonce/listannonce.component';
import { AnnonceComponent } from './annonce.component';
import { AnnonceRoutingModule } from './annonce-routing.module';



@NgModule({
  declarations: [
    AnnonceComponent,
    ListannonceComponent
  ],
  imports: [
    CommonModule,
    AnnonceRoutingModule
  ]
})
export class AnnonceModule { }
