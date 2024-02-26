import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ResidenceService } from '../services/residence.service';
import { Apartment } from '../models/appartements';
import { Residence } from '../models/residence';

@Component({
  selector: 'app-updateappartment',
  templateUrl: './updateappartment.component.html',
  styleUrls: ['./updateappartment.component.css']
})
export class UpdateappartmentComponent implements OnInit {
  imageUrl="/assets/images/"
id!:number
updateform!:FormGroup
list:Apartment[]=[]
res:Residence={id:1,name:"",address:"",image:this.imageUrl+"residence1.jpg"}
  constructor(private activateRoute:ActivatedRoute,private residenceService:ResidenceService,private router:Router){}
ngOnInit(): void {

  this.id=this.activateRoute.snapshot.params['id']
  console.log(this.id)
this.residenceService.getappartment().subscribe((data)=>{
this.list=data
})

  this.updateform=new FormGroup({
    appartNum:new FormControl('',Validators.required),
    description:new FormControl('',Validators.required),
    residence:new FormControl(this.res,Validators.required)
  })
}

update(){
  console.log(JSON.stringify(this.updateform.value)+'hhhhhhhhhhhhhh'+this.id)
  this.residenceService.updateappartement(this.updateform.value,this.id).subscribe(()=>{
    console.log('updated')
    this.router.navigate(['/appartment'])
  })

}
}
