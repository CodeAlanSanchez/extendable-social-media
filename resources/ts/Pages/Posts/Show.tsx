import UsernameLink from "@/Components/Account/UsernameLink";
import PostItem from "@/Components/Post/PostItem";
import Basic from "@/Layouts/Basic";
import { Post } from "@/Types/models";

interface Props {
    post: Post;
}

const Show: React.FC<Props> = ({ post }: Props) => {
    return (
        <Basic>
            <div className="max-w-2xl mt-16 h-72 mx-auto flex flex-row p-4 bg-slate-100 rounded shadow">
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
        </Basic>
    );
};

export default Show;
