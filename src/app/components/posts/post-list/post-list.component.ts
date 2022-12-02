import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'pl-post-list',
    templateUrl: './post-list.component.html',
    styleUrls: ['./post-list.component.scss']
})
export class PostListComponent {
    @Input() posts: any | undefined = [];
    @Output() postClicked$: EventEmitter<any> = new EventEmitter<any>();

    openPost(post: any){
        this.postClicked$.emit(post);
    }
}