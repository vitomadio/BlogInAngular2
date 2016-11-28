import { Component, OnInit, NgZone } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { AngularFire, FirebaseListObservable, FirebaseApp } from 'angularfire2';
import { Router } from '@angular/router';

// import * as firebase from 'firebase';


@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],

})

export class PostComponent implements OnInit {

  //Uploader file binding
  private zone: NgZone;
  private basicOptions: Object;
  private progress: number = 0;
  private response: any = {};

  form: FormGroup;
  messages: string;
  posts: FirebaseListObservable<any>;
  userId: string;
  file: {};

  constructor(private af:AngularFire, private router:Router) {
      this.af.auth.subscribe(auth => this.userId = auth.auth.email);
      this.zone = new NgZone({ enableLongStackTrace: false });
        this.basicOptions = {
        url: 'http://localhost:4200/upload'
      };
  }
  
  ngOnInit(){
    this.posts = this.af.database.list('/posts');
  }

  onSubmit(form){
    this.posts.push(form);
  }

  deleteItem(key){
    this.posts.remove(key);
  }

  handleUpload(data: any): void {
    this.zone.run(() => {
      this.response = data;
      this.progress = data.progress.percent / 100;
    });
  }
}



  		
  	






  		
 
  	
