import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Post } from 'src/app/model/post.model';
import { ApiService } from '../../services/api/api.service';
import { StateService } from '../../services/state/state.service';

@Component({
    selector: 'pl-posts',
    templateUrl: './posts.component.html',
    styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit{
    posts: Post[] | undefined = [];
    
    constructor(private apiService: ApiService,
        private stateService: StateService,
        private router: Router, 
        private route: ActivatedRoute){
        this.route.data.subscribe((data: any) => {
            this.stateService.Users = data.users;
        });
        this.stateService.State!.subscribe((state: any) => {
            this.posts = state.filteredPosts;
        });
    }

    ngOnInit(): void {
        this.apiService.getPosts()?.subscribe((posts: Post[]) => {            
            this.stateService.AllPosts = posts;
        });
    }

    /**
     * search posts by username
     * @param searchQuery 
     */
    filterPosts(event: Event){
        const searchQuery = (event?.target as HTMLInputElement).value;
        this.stateService.filterPosts(searchQuery);
    }

    /**
     * navigate to page with post and associtated comments
     * @param post 
     */
    onPostClicked(post: Post){
        this.stateService.CurrentPost = post;
        this.router.navigate([`post/${post.id}`]);
    }
}