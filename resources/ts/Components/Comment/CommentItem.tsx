import { Comment, User } from "@/Types/models";
import UsernameLink from "../Account/UsernameLink";

interface Props {
    comment: Comment & { user: User };
}

const CommentItem: React.FC<Props> = ({ comment }: Props) => {
    return (
        <div className="mt-4 rounded p-4 bg-white shadow">
            <UsernameLink username={comment.user.username} />
            <p>{comment.content}</p>
        </div>
    );
};

export default CommentItem;
