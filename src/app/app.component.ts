import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'newproject';
  variable="bonjour 4ERP-BI 6 interpolation"
  propriete:boolean=true
  message:string=""
  prop:string="bonjour"
  showmessage(){
    this.message="hello 4 ERP-bi 6"
  }
}
