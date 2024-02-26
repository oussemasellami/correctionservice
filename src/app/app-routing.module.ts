import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ResidenceComponent } from './residence/residence.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { FormResidenceComponent } from './form-residence/form-residence.component';
import { AppartementComponent } from './appartement/appartement.component';
import { AddappartmentComponent } from './addappartment/addappartment.component';
import { UpdateappartmentComponent } from './updateappartment/updateappartment.component';

const ROUTES:Routes=[
  {path:"",redirectTo:"home",pathMatch:"full"},
  {path:"home",component:HomeComponent},
  {path:"residence",component:ResidenceComponent},
  {path:"appartment",component:AppartementComponent},
  {path:"appartment/updateappart/:id",component:UpdateappartmentComponent},
  {path:"addappartment",component:AddappartmentComponent},
  {path:'form',component:FormResidenceComponent}
 // {path:"**",component:NotfoundComponent}
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(ROUTES),
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
