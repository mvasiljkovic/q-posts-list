import { Post } from './post.model';
import { User } from './user.model';
import { Comment } from './comment.model';

export interface State {
    users?: User[];
    allPosts?: Post[];
    filteredPosts?: Post[];
    currentPost?: Post;
    comments?: Comment[];
}