import { Comment, User } from "@/Types/models";
import UsernameLink from "../Account/UsernameLink";

interface Props {
    comment: Comment & { user: User };
}

const CommentItem: React.FC<Props> = ({ comment }: Props) => {
    return (
        <div>
            <UsernameLink username={comment.user.username} />
            <p>{comment.content}</p>
        </div>
    );
};

export default CommentItem;
