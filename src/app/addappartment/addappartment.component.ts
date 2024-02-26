import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Residence } from '../models/residence';
import { ResidenceService } from '../services/residence.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addappartment',
  templateUrl: './addappartment.component.html',
  styleUrls: ['./addappartment.component.css']
})
export class AddappartmentComponent implements OnInit {
  imageUrl="/assets/images/"
  addform!:FormGroup
  res:Residence={id:1,name:"",address:"",image:this.imageUrl+"residence1.jpg"}

  constructor( private residenceService:ResidenceService ,private router:Router){}
ngOnInit(): void {
  this.addform=new FormGroup({
    appartNum:new FormControl('',Validators.required),
    description:new FormControl('',Validators.required),
    residence:new FormControl(this.res,Validators.required)
  })
}


  add(){
    this.residenceService.addappartment(this.addform.value).subscribe((data)=>{
      console.log("added "+this.addform.value)
      this.router.navigate(['/appartment'])
    })

  }
}
