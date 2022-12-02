import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostsComponent } from './components/posts/posts.component';
import { CommentsComponent } from './components/comments/comments.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { UserResolver } from './resolvers/user.resolver';

const routes: Routes = [
	{
		path: 'posts',
		component: PostsComponent,
		resolve: {users: UserResolver}
	},
	{
		path: 'post/:id',
		component: CommentsComponent
	},
	{
		path: '',
		redirectTo: 'posts',
		pathMatch: 'full'
	},
	{
		path: '**',
		component: NotFoundComponent
	}
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
