import UsernameLink from "@/Components/Account/UsernameLink";
import CommentForm from "@/Components/Comment/CommentForm";
import CommentItem from "@/Components/Comment/CommentItem";
import Basic from "@/Layouts/Basic";
import { Comment, Post, User } from "@/Types/models";

interface Props {
    post: Post & { comments: (Comment & { user: User })[] };
}

const Show: React.FC<Props> = ({ post }: Props) => {
    return (
        <Basic>
            <div className="max-w-2xl mx-auto mt-16">
                <div className="flex flex-row bg-slate-100 rounded shadow h-72 p-4 mb-8">
                    <div className="bg-white mr-8">
                        <img src={post.image_url} alt={post.caption} />
                    </div>
                    <div className="border-l-2 border-slate-200 pl-8">
                        <h1>
                            <UsernameLink username={post.user.username} />
                            &nbsp;
                            {post.caption}
                        </h1>
                        <p>{post.likes}</p>
                    </div>
                </div>
                <CommentForm post={post} />
                {post.comments?.map((comment) => (
                    <CommentItem key={comment.id} comment={comment} />
                ))}
            </div>
        </Basic>
    );
};

export default Show;
