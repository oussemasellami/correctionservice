import { Component, OnInit } from '@angular/core';
import { ResidenceService } from '../services/residence.service';
import { Apartment } from '../models/appartements';
import { Router } from '@angular/router';

@Component({
  selector: 'app-appartement',
  templateUrl: './appartement.component.html',
  styleUrls: ['./appartement.component.css']
})
export class AppartementComponent implements OnInit {

  listappart:Apartment[]=[]
  constructor(private residenceService:ResidenceService,private router:Router ){

  }
  ngOnInit(): void {

    this.residenceService.getappartment().subscribe((data:Apartment[])=>{
this.listappart=data
    })
    
  }

  deleteappart(id:number){
console.log(id)
    this.residenceService.deleteappart(id).subscribe(()=>{
      console.log("deleted")
      //this.router.navigateByUrl('/appartment')
      window.location.reload();
    })

  }
addcom(){
  this.router.navigate(['/addappartment'])
}
}
