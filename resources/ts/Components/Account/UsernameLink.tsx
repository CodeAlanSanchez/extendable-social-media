interface Props {
    username: string;
}

const UsernameLink: React.FC<Props> = ({ username }: Props) => {
    return (
        <span>
            <a
                className="text-md font-semibold hover:text-indigo-700"
                href={`/profile/${username}`}
            >
                {username}
            </a>
        </span>
    );
};

export default UsernameLink;
