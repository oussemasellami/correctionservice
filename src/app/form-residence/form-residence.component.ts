import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-residence',
  templateUrl: './form-residence.component.html',
  styleUrls: ['./form-residence.component.css']
})
export class FormResidenceComponent implements OnInit {

  form!:FormGroup
  ngOnInit(): void {
    this.form=new FormGroup(
      {
        name:new FormControl('',Validators.required),
        address:new FormControl('',Validators.required)

      }
    )
  }
  get name(){ return this.form.get('name')}
  get address(){return this.form.get('address')}
add(){
  console.log(this.form.value)
}


}
