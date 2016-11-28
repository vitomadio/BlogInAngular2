import { Component } from '@angular/core';
import { AngularFire } from 'angularfire2';
import {Observable} from 'rxjs/Observable';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

	currentUser:string;
	auth: any;

  constructor(private af:AngularFire){
  	this.af.auth.subscribe((auth)=> this.auth = auth)
  }
  
  logOut(){
  	this.af.auth.logout()
  }
}

  		




	
  
 