import { Component, Input } from '@angular/core';

@Component({
    selector: 'pl-comment-list',
    templateUrl: './comment-list.component.html',
    styleUrls: ['./comment-list.component.scss']
})
export class CommentListComponent{
    @Input() post: any | undefined;
    @Input() comments: any | undefined;
}