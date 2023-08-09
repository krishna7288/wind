import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

const Login = () => {
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });

    const navigator = useNavigate();

    const handleForm = async (e) => {
        e.preventDefault();
        navigator('/homepage/dashboard')
    };

    return (
        <>
            <div className="flex flex-col w-full justify-center items-center h-[100vh] gap-5 px-6 bg-gray-50">
                <h1 className="text-[30px]  text-neutral font-semibold">
                    Welcome back
                </h1>
                <p className="text-[16px] text-gray-500 font-medium">
                    Login to continue
                </p>

                <form
                    className="flex flex-col gap-6 w-full sm:w-[400px]"
                    onSubmit={handleForm}
                >
                    <div className="w-full">
                        <input
                            type="email"
                            placeholder="Email"
                            required
                            value={formData.email}
                            onChange={(e) =>
                                setFormData({ ...formData, email: e.target.value })
                            }
                            className="border-2 border-310 rounded-md w-full h-[50px] pl-4 focus:outline-none focus:ring-0  focus:border-gray-200"
                        />
                    </div>
                    <div>
                        <input
                            type="password"
                            placeholder="Password"
                            required
                            value={formData.password}
                            onChange={(e) =>
                                setFormData({ ...formData, password: e.target.value })
                            }
                            className="border-2 border-310 rounded-md w-full h-[50px] pl-4 focus:outline-none focus:ring-0  focus:border-gray-200"
                        />
                    </div>
                    <div className="w-full flex justify-center items-center">
                        <button
                            className="text-white w-full text-lg btn btn-error font-semibold"
                            type="submit"
                        >
                            LOGIN
                        </button>
                    </div>
                    <span
                        className="text-center text-210 text-[16px] font-medium border-b-[1px] border-gray-400 pb-4 cursor-pointer"

                    >
                        Forget your Password?
                    </span>
                    <p className="flex justify-center items-center gap-1 text-[16px] text-gray-600 font-normal">
                        Don't have an account?
                        <Link to="" >
                            <span className="text-error font-medium">
                                Sign up
                            </span>
                        </Link> 
                    </p>
                </form>
            </div>
        </>
    );

}

export default Login;




