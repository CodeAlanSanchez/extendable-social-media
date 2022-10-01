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
            className="bg-slate-100 rounded px-4 pb-4 pt-2 shadow"
        >
            <h2 className="text-lg mb-2 mt-1">Comment</h2>
            <div className="flex">
                <input
                    type="text"
                    id="comment"
                    name="comment"
                    value={data.content}
                    onChange={(e) => handleChange(e)}
                    placeholder="Write your thoughts..."
                    className="border-slate-200 border-b-slate-300 rounded w-full shadow"
                />
                <button className="ml-4 bg-blue-600 text-white hover:bg-blue-500 px-4 p-2 rounded shadow">
                    Submit
                </button>
            </div>
        </form>
    );
};

export default CommentForm;
