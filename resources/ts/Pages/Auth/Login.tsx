import { useForm } from "@inertiajs/inertia-react";
import React from "react";

interface Props {}

const Login: React.FC<Props> = ({}: Props) => {
    const { setData, post } = useForm({
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
        <div> as string | boolean
            <form
                action=""
                onSubmit={(e) => handleSubmit(e)}
                className="flex flex-col w-64 rounded shadow bg-slate-100 p-6 mx-auto mt-8"
            >
                <h1 className="text-xl mb-2">Login</h1>
                <label htmlFor="email" className="text-slate-700">
                    Email
                </label>
                <input
                    type="text"
                    name="email"
                    id="email"
                    placeholder="Email"
                    className="h-8 mb-2 px-2"
                    onChange={(e) => handleChange(e)}
                />
                <label htmlFor="password" className="text-slate-700">
                    Password
                </label>
                <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Password"
                    className="h-8 mb-4 px-2"
                    onChange={(e) => handleChange(e)}
                />
                <button
                    type="submit"
                    className="rounded shadow bg-blue-600 text-white w-24 p-1 py-2 hover:bg-blue-500"
                >
                    Login
                </button>
            </form>
        </div>
    );
};

export default Login;
