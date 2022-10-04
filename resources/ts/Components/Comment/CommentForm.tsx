import { Post } from "@/Types/models";
import { useForm } from "@inertiajs/inertia-react";
import React from "react";

interface Props {
    post: Post;
}

const CommentForm: React.FC<Props> = ({ post }: Props) => {
    const {
        data,
        setData,
        post: postMethod,
    } = useForm({
        content: "",
        commentable_type: "post",
        commentable_id: post.id,
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.name === "content") {
            setData(e.target.name, e.target.value);
        }
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        postMethod("/comments");
    };

    return (
        <form
            action="submit"
            onSubmit={(e) => handleSubmit(e)}
            className="bg-white rounded px-4 pb-4 pt-2 shadow"
        >
            <h2 className="text-lg mb-2 mt-1">Comment</h2>
            <div className="flex">
                <input
                    type="text"
                    id="content"
                    name="content"
                    value={data.content}
                    onChange={(e) => handleChange(e)}
                    placeholder="Write your thoughts..."
                    className="px-2 py-1 w-full border-x-0 border-t-0 border-b-2 border-transparent focus:ring-0 focus:outline-none focus:border-x-0 focus:border-t-0 focus:border-b-slate-200"
                />
                <button className="ml-4 bg-blue-600 text-white hover:bg-blue-500 outline outline-blue-300 px-4 p-2 rounded shadow">
                    Submit
                </button>
            </div>
        </form>
    );
};

export default CommentForm;
