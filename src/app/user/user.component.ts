import { Component, OnInit } from '@angular/core';
import { BlogService } from '../blog.service';



@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

	userMail: string;

  constructor(private bservice:BlogService) { }

  

  ngOnInit() {

  		
  	
  }
  

}
