import { Injectable } from '@angular/core';
import { Post } from '../../model/post.model';
import { User } from '../../model/user.model';
import { Comment } from '../../model/comment.model';
import { State } from '../../model/state.model';
import { ApiService } from '../api/api.service';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable()
export class StateService {

    state$: BehaviorSubject<State> | undefined;

    constructor(private apiService: ApiService){
        const initialState: State = {
            users: [],
            allPosts: [],
            filteredPosts: [],
            currentPost: undefined,
            comments:[]
        };
        this.state$ = new BehaviorSubject(initialState);
    }
        
    dispatchState(state: State){
        this.state$?.next(state);
    }

    get State(): Observable<State> | undefined{
        return this.state$?.asObservable();
    }

    get Users(): User[] | undefined {
        return this.state$?.getValue().users;
	}

    set Users(users: User[] | undefined){
        this.dispatchState({
            ...this.state$?.getValue(),
            users: users
        });
    }

    set AllPosts(posts: Post[] | undefined){
        posts = posts?.map(item => {
            return {
                ...item,
                username: this.Users?.find((u) => {return u.id == item.userId})?.username
            }
        });
        this.dispatchState({
            ...this.state$?.getValue(),
            allPosts: posts,
            filteredPosts: posts
        });
    }

    get FilteredPosts(): Post[] | undefined {
        return this.state$?.getValue().filteredPosts;
    }

    set FilteredPosts(posts: Post[] | undefined){
        this.dispatchState({
            ...this.state$?.getValue(),
            filteredPosts: posts
        });
    }

    /**
     * search posts by username
     * @param searchQuery 
     */
    filterPosts(searchQuery: string){
        const posts = this.state$?.getValue().allPosts;
        this.FilteredPosts = posts?.filter((item: Post) => { 
            return item?.username?.toLowerCase().indexOf(searchQuery.toLowerCase())! > -1 
        });
    }

    get CurrentPost(): Post | undefined {
        return this.state$?.getValue().currentPost;
	}

    set CurrentPost(post: Post | undefined){
        this.dispatchState({
            ...this.state$?.getValue(),
            currentPost: post
        });
    }

    get Comments(): Comment[] | undefined {
        return this.state$?.getValue().comments;
	}

    set Comments(comments: Comment[] | undefined){
        this.dispatchState({
            ...this.state$?.getValue(),
            comments: comments
        });
    }
}