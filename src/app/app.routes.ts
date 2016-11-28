import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
 
import {UserSigninComponent} from './user-signin/user-signin.component';
import {UserSignupComponent} from './user-signup/user-signup.component';
import {UserComponent} from './user/user.component';
import {PostComponent} from './post/post.component';
import {AuthGuard} from './auth-guard.service';

const routes: Routes = [
	{path: 'user/signin', component: UserSigninComponent },
	{path: 'user/signup', component: UserSignupComponent },
	{path: 'user', component: UserComponent },
	{path: '', component: PostComponent, canActivate:[AuthGuard] },
	]

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})

export class AppRoutes {}