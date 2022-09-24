import PostItem from "@/Components/Post/PostItem";
import { Post } from "@/Types/models";

interface Props {
    post: Post;
}

const Show: React.FC<Props> = ({ post }: Props) => {
    return (
        <div>
            <PostItem post={post} />
        </div>
    );
};

export default Show;
