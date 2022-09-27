import PostItem from "@/Components/Post/PostItem";
import Basic from "@/Layouts/Basic";
import { Post } from "@/Types/models";
import { Paginate } from "@/Types/requests";

interface Props {
    posts?: Paginate<Post>;
}

const index: React.FC<Props> = ({ posts }: Props) => {
    return (
        <Basic>
            <div className="p-1 sm:p-8 min-h-screen">
                <div className="grid grid-flow-row grid-cols-[repeat(auto-fill,minmax(15rem,1fr))] gap-0 md:gap-4">
                    {posts?.data.map((post) => (
                        <PostItem key={post.id} post={post} />
                    ))}
                </div>
            </div>
        </Basic>
    );
};

export default index;
