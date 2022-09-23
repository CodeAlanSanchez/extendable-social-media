interface Model {
    id: number;
}

export interface User extends Model {
    username: string;
    email: string;
}

export interface Post extends Model {
    user: User;
    caption: string;
    image_url: string;
    likes: number;
}

export interface Comment extends Model {
    user_id: number;
    commentable_id: number;
    commentable_type: string;
    content: string;
    likes: number;
}
