import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable, catchError, throwError } from 'rxjs';
import { User } from '../../model/user.model';
import { Post } from '../../model/post.model';
import { Comment } from '../../model/comment.model';

@Injectable()
export class ApiService {

	private postsApi: string = 'https://jsonplaceholder.typicode.com/'
    constructor(private http: HttpClient){}

    getUsers(): Observable<User[]> {
		let apiURL = `${this.postsApi}users`;
		return this.http.get(apiURL).pipe(
			(res: Observable<User[]|any>) => res,
			catchError((err: HttpErrorResponse) => this.catchError(err))
		);
	}

    getPosts(): Observable<Post[]> {
		let apiURL = `${this.postsApi}posts`;
		return this.http.get(apiURL).pipe(
			(res: Observable<Post[]|any>) => res,
			catchError((err: HttpErrorResponse) => this.catchError(err))
		);
	}

    getPost(id: number | string): Observable<Post> {
		let apiURL = `${this.postsApi}posts/${id}`;
		return this.http.get(apiURL).pipe(
			(res: Observable<Post|any>) => res,
			catchError((err: HttpErrorResponse) => this.catchError(err))
		);
	}

    getComments(id: number | string): Observable<Comment[]> {
		let apiURL = `${this.postsApi}posts/${id}/comments`;
		return this.http.get(apiURL).pipe(
			(res: Observable<Comment[] | any>) => res,
			catchError((err: HttpErrorResponse) => this.catchError(err))
		);
	}

	catchError(error: any): Observable<any>{
        console.log(error)
		window.alert("Error: " + error?.message);
		return throwError(error);
	}
}