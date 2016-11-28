import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { AngularFire, FirebaseListObservable } from 'angularfire2';



@Injectable()
export class BlogService {

	lists: FirebaseListObservable<any>;

	constructor(private af:AngularFire) {}


}



	

	

