import { Post } from "@/Types/models";
import { useEffect, useState } from "react";

interface Props {
    post: Post;
}

const PostItem: React.FC<Props> = ({ post }: Props) => {
    const [caption, setCaption] = useState(post.caption);

    useEffect(() => {
        length = 100;
        if (caption.length > length)
            setCaption(caption.substring(0, length).trim() + "...");
    }, [post.caption]);

    return (
        <div
            className={`h-80 shadow-lg leading-4 bg-[url('img/${post.image_url})] rounded-[.266rem]`}
        >
            <div className="text-white flex flex-col justify-end align-bottom bg-gradient-to-t from-black to-transparent min-w-full p-4 h-full rounded-[.266rem]">
                <h4 className="font-bold text-lg">{post.user.username}</h4>
                <p className="leading-5 text-sm">{caption}</p>
            </div>
        </div>
    );
};

export default PostItem;
