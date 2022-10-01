import { useForm } from "@inertiajs/inertia-react";
import React from "react";

interface Props {}

const Login: React.FC<Props> = ({}: Props) => {
    const { data, setData, post } = useForm({
        email: "",
        password: "",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.name === "email" || e.target.name === "password") {
            setData(e.target.name, e.target.value);
        }
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        post("/login");
    };

    return (
        <div>
            <form
                action=""
                onSubmit={(e) => handleSubmit(e)}
                className="flex flex-col w-64 rounded shadow bg-slate-100 p-4 mx-auto mt-8"
            >
                <a href="/" className="text-blue-600 mb-2 hover:text-blue-400">
                    &#8592; Back
                </a>
                <h1 className="text-xl mb-2">Login</h1>
                <label htmlFor="email" className="text-slate-700">
                    Email
                </label>
                <input
                    type="text"
                    name="email"
                    id="email"
                    placeholder="Email"
                    className="mb-2 border-slate-200 border-b-slate-300 rounded shadow w-full"
                    onChange={(e) => handleChange(e)}
                    value={data.email}
                />
                <label htmlFor="password" className="text-slate-700">
                    Password
                </label>
                <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Password"
                    className="mb-4 border-slate-200 border-b-slate-300 rounded shadow w-full"
                    onChange={(e) => handleChange(e)}
                    value={data.password}
                />
                <button
                    type="submit"
                    className="rounded bg-blue-600 text-white w-24 p-1 py-2 hover:bg-blue-500 shadow"
                >
                    Login
                </button>
            </form>
        </div>
    );
};

export default Login;
