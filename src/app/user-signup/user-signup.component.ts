import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs/Rx';
import { Router } from '@angular/router';
import { AngularFire } from 'angularfire2';

@Component({
  selector: 'app-user-signup',
  templateUrl: './user-signup.component.html',
  styleUrls: ['./user-signup.component.css']
})
export class UserSignupComponent implements OnInit {

  constructor(private af:AngularFire, private router:Router) { }

  form: FormGroup;
  message: string;

  ngOnInit() {

  }

  signUp(form){
  	if(form.valid){
  		this.af.auth.createUser({email:form.value.email, password:form.value.password})
  		.then((success) => {
  			console.log(form);
  			this.router.navigate(['/user/signin']);
  			this.message = "Successfuly Sign Up!!!";
  		})
  		.catch((err)=>{
  			this.router.navigate(['/user/signup']);
  			this.message = "Successfuly Sign Up!!!";
  		})
  	}
  }

}
  


  	 
  	
