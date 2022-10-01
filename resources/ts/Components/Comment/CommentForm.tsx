import { useForm } from "@inertiajs/inertia-react";

interface Props {}

const CommentForm: React.FC<Props> = ({}: Props) => {
    const { data } = useForm();

    return (
        <form
            action="submit"
            className="bg-slate-100 rounded px-4 pb-4 pt-2 shadow"
        >
            <h2 className="text-lg mb-2 mt-1">Comment</h2>
            <div className="flex">
                <input
                    type="text"
                    id="comment"
                    name="comment"
                    value={data.comment}
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
