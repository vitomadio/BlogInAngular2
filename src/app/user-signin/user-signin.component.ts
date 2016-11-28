import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { AngularFire, FirebaseAuth} from 'angularfire2';
import { Router } from '@angular/router';


@Component({
  selector: 'app-user-signin',
  templateUrl: './user-signin.component.html',
  styleUrls: ['./user-signin.component.css']
})
export class UserSigninComponent implements OnInit {

	form: FormGroup;
	message: string;
	

  constructor(private af:AngularFire, private router:Router) {}

  ngOnInit() {
  	this.af.auth.subscribe(auth => auth != null);
  }

  signIn(form){
  	if(form.valid){
  		this.af.auth.login({email:form.value.email, password:form.value.password})
  		.then(()=> {
  			this.af.auth.subscribe(auth=>{
  				if(!auth){
  					this.router.navigate(['/user/signin'])
  				}else{
  					this.router.navigate(['/'])
  				}
  			})
  		})
  		// .then(success => {this.router.navigate(['/'])})
  		.catch((err)=>{
  			this.router.navigate(['/user/signin']);
  			this.message = 'Invalid email or password...';
  		})
  	}
  }

}
