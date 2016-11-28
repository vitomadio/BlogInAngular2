import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { firebaseConfig } from '../environments/firebase.config';
import { AngularFireModule, AuthProviders, AuthMethods } from 'angularfire2';
import { Ng2UploaderModule } from 'ng2-uploader';
import { ImageUploadModule } from 'angular2-image-upload';
import { PolymerElement } from '@vaadin/angular2-polymer';

import 'rxjs/Rx';         

import { AppComponent } from './app.component';
import { UserSigninComponent } from './user-signin/user-signin.component';
import { UserSignupComponent } from './user-signup/user-signup.component';
import { UserComponent } from './user/user.component';
import { PostComponent } from './post/post.component';
import { PostDetailComponent } from './post-detail/post-detail.component';


import { AppRoutes } from './app.routes';
import { AuthGuard } from './auth-guard.service';
import { BlogService } from './blog.service';
import { SortPipe } from './sort.pipe';
import { DerpPipe } from './derp.pipe';

  const myFirebaseAuthConfig = {
  provider: AuthProviders.Password,
  method: AuthMethods.Password
}

@NgModule({
  declarations: [
    AppComponent,
    UserSigninComponent,
    UserSignupComponent,
    UserComponent,
    PostComponent,
    PostDetailComponent,
    SortPipe,
    DerpPipe,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    AppRoutes,
    Ng2UploaderModule,
    ImageUploadModule.forRoot(),
    AngularFireModule.initializeApp(firebaseConfig,myFirebaseAuthConfig)

  ],
  providers: [BlogService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
