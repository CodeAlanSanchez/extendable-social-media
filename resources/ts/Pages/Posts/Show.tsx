import UsernameLink from "@/Components/Account/UsernameLink";
import CommentForm from "@/Components/Comment/CommentForm";
import CommentItem from "@/Components/Comment/CommentItem";
import Basic from "@/Layouts/Basic";
import { Comment, Post, User } from "@/Types/models";
import { Inertia } from "@inertiajs/inertia";
import { BsBookmark, BsHeart } from "react-icons/bs";

interface Props {
    post: Post & { comments: (Comment & { user: User })[] };
}

const Show: React.FC<Props> = ({ post }: Props) => {
    const handleLike = () => {
        Inertia.post(`/likes`, { likeable_type: "post", likeable_id: post.id });
    };

    const handleSave = () => {
        Inertia.post(`/saves`, { saveable_type: "post", saveable_id: post.id });
    };

    return (
        <Basic>
            <div className="max-w-2xl mx-auto mt-16">
                <div className="flex flex-col md:flex-row bg-white rounded shadow md:h-72 mb-8 md:mb-8 p-4">
                    <div className="bg-white mb-4 md:mr-4">
                        <img src={post.image_url} alt={post.caption} />
                    </div>
                    <div className="sm:border-t-2 md:border-t-0 md:border-l-2 border-slate-200 pt-2 md:pt-0 md:pl-4 flex flex-col">
                        <div>
                            <div className="flex flex-row gap-4 mb-2">
                                <button
                                    type="button"
                                    onClick={() => handleLike()}
                                >
                                    <BsHeart size={20} />
                                </button>
                                <button
                                    type="button"
                                    onClick={() => handleSave()}
                                >
                                    <BsBookmark size={20} />
                                </button>
                            </div>
                        </div>
                        <div>
                            <h1>
                                <UsernameLink username={post.user.username} />
                                &nbsp;
                                {post.caption}
                            </h1>
                            <p>{post.likes}</p>
                        </div>
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
