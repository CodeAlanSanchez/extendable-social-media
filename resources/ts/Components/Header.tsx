import { Link } from "@inertiajs/inertia-react";

const Header: React.FC = () => {
    return (
        <nav className="h-16 px-8 bg-blue-900 text-white text-lg flex items-center">
            <ul className="flex flex-row items-center w-full">
                <li className="mr-12 hover:text-cyan-300">
                    <Link href="/">Home</Link>
                </li>
                <li className="mr-12 hover:text-cyan-300">
                    <Link href="/posts">Posts</Link>
                </li>
                <li className="mr-12 hover:text-cyan-300">
                    <Link href="/account">Account</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Header;
