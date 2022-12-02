import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Post } from 'src/app/model/post.model';
import { Comment } from 'src/app/model/comment.model';
import { StateService } from '../../services/state/state.service';
import { ApiService } from '../../services/api/api.service';

@Component({
    selector: 'pl-comments',
    templateUrl: './comments.component.html',
    styleUrls: ['./comments.component.scss']
})
export class CommentsComponent implements OnInit{
    postId: number | undefined;
    currentPost: Post | undefined;
    comments: Comment[] | undefined = [];

    constructor(private apiService: ApiService,
        private stateService: StateService,
        private route: ActivatedRoute){
        this.postId = this.route?.snapshot?.params['id'];
        this.stateService.State!.subscribe((state: any) => {
            this.currentPost = state.currentPost;
            this.comments = state.comments;
        });
    }

    ngOnInit(): void {
        if(!this.stateService.CurrentPost){
            this.apiService.getPost(this.postId!)?.subscribe((post: Post) => {            
                this.stateService.CurrentPost = post;
            });
        }
        this.apiService.getComments(this.postId!)?.subscribe((comments: Comment[]) => {            
            this.stateService.Comments = comments;
        });
    }
}