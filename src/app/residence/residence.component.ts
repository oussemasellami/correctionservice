import { Component } from '@angular/core';
import { Residence } from '../models/residence';
import { Apartment } from '../models/appartements';
import { Router } from '@angular/router';
import { ResidenceService } from '../services/residence.service';

@Component({
  selector: 'app-residence',
  templateUrl: './residence.component.html',
  styleUrls: ['./residence.component.css']
})
export class ResidenceComponent {

  constructor(private router:Router,private residenceservice:ResidenceService){

  }
imageUrl="./assets/images/"
searchsurface!:number
selectedresidence!:number
selectedlist:Apartment[]=[]
test:string="bonjour"
prop:boolean=false
message:string=""
somme!:number
  listResidences:Residence[]=[
    {id:1,"name": "El fel","address":"Borj Cedria", "image":this.imageUrl+"residence1.jpg"},
     {id:2,"name": "El yasmine", "address":"Ezzahra","image":this.imageUrl+"residence2.jpg"},
     {id:3,"name": "El Arij", "address":"Rades","image":this.imageUrl+"residence3.jpg"},
     {id:4,"name": "El Anber","address":"Manzah 5", "image":this.imageUrl+"residence1.jpg"}
   ];

   listApartments:Apartment[]=[
    {id:1,"appartNum":1,"floorNum":0,"surface":100,"terrace":"oui","surfaceTerrace":20,"category":"S+1","description":"Appartement S+1","residence":this.listResidences[0] },
    {id:2,"appartNum":2,"floorNum":0,"surface":130,"terrace":"non","surfaceTerrace":0,"category":"S+2","description":"Appartement S+2","residence":this.listResidences[0] },
    {id:3,"appartNum":3,"floorNum":0,"surface":150,"terrace":"oui","surfaceTerrace":30,"category":"S+3","description":"Appartement S+3","residence":this.listResidences[1] },
    {id:2,"appartNum":2,"floorNum":0,"surface":130,"terrace":"non","surfaceTerrace":0,"category":"S+2","description":"Appartement S+2","residence":this.listResidences[0] },
    {id:3,"appartNum":3,"floorNum":0,"surface":150,"terrace":"oui","surfaceTerrace":30,"category":"S+3","description":"Appartement S+3","residence":this.listResidences[1] },
    {id:2,"appartNum":2,"floorNum":0,"surface":130,"terrace":"non","surfaceTerrace":0,"category":"S+2","description":"Appartement S+2","residence":this.listResidences[0] },
    {id:3,"appartNum":3,"floorNum":0,"surface":150,"terrace":"oui","surfaceTerrace":30,"category":"S+3","description":"Appartement S+3","residence":this.listResidences[1] },]
    
    sommecreteria(){
      this.somme=this.residenceservice.getnumber(this.listApartments,"appartNum",2)

    }
    
    
    showappart(residence:number){
      console.log(residence)
      let applist:Apartment[]=[]
      for(let i=0;i<this.listApartments.length;i++){
        if(this.listApartments[i].residence.id==residence){
applist.push(this.listApartments[i])
        }
      }
this.selectedlist=applist

    }

    show(){
      this.message="bonjour"
    }

    redirect(){
this.router.navigate(['/form'])
    }
 

}
