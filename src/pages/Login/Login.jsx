import { FcBusinessman, FcGoogle } from "react-icons/fc";
import { FaArrowLeft, FaEye, FaEyeSlash } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const Login = () => {
    const [showPassword, setShowPassword] = useState(false);
    const { signinUser, setLogin, signInWithGoogle } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();

    const handleLogin = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        signinUser(email, password)
            .then(() => {
                Swal.fire("Good job", "Login successfull", "success");
                setLogin(true);
                navigate(location?.state ? location.state : "/")
                e.target.reset();
            })
            .catch(error => {
                Swal.fire("Login Error", error.message, "error")
                console.log(error);
            })
    }

    const handleGoogleSignIn = () => {
        signInWithGoogle()
            .then(result => {
                console.log(result.user)
                navigate(location?.state ? location.state : "/")
            })
            .catch(error => {
                console.log(error)
            })
    }

    return (
        <div className="my-20 p-5">
            <Link to="/" className="rounded px-4 ml-20 py-2 text-blue-900 font-bold bg-gradient-to-r from-cyan-400 to-blue-400 shadow-lg shadow-blue-500/50 hover:bg-gradient-to-r hover:from-blue-500 hover:to-cyan-500">
                <FaArrowLeft className="text-lg inline" /> Go Home
            </Link>
            <div className="relative shadow-xl w-[400px] mx-auto outline p-6 outline-blue-500 rounded-lg">
                <form onSubmit={handleLogin}>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-base font-medium">Email</span>
                        </label>
                        <input type="email" name="email" placeholder="Your email" className="input input-bordered input-info" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-base font-medium">Password</span>
                        </label>
                        <div className="relative">
                            <input
                                type={showPassword ? "text" : "password"}
                                name="password" placeholder="password" className="input input-bordered input-info w-full" required />
                            <span className="absolute top-4 right-4" onClick={() => setShowPassword(!showPassword)}>
                                {
                                    showPassword ? <FaEye></FaEye> : <FaEyeSlash></FaEyeSlash>
                                }
                            </span>
                        </div>

                        <label className="label">
                            <a href="#" className="link link-hover text-sm font-medium">Forgot password?</a>
                        </label>
                    </div>

                    <div className="form-control mt-3">
                        <button className="font-bold px-4 py-2 text-white bg-gradient-to-r from-purple-600 to-blue-500 hover:from-blue-500 hover:to-purple-600 rounded-lg">Login</button>
                    </div>
                </form>

                <div className="divider font-medium">OR</div>
                {/* continue with google */}
                <div className="flex gap-6 justify-center">
                    <div className="flex items-center text-gray-500 justify-center w-full border-solid border-2 border-blue-300 hover:text-blue-500 p-2 rounded-lg font-bold">
                        <FcGoogle className="text-2xl mr-1"></FcGoogle>
                        <button onClick={handleGoogleSignIn}>Continue with Google</button>
                    </div>
                </div>

                <p className="mt-4 text-center font-medium">Do not have an account? Please <Link className="text-blue-500 font-bold underline" to="/register">Register</Link></p>

                <div className="absolute top-[-50px] left-[150px]">
                    <FcBusinessman className="text-8xl p-2 bg-gradient-to-r from-purple-300 to-blue-300 border rounded-full"></FcBusinessman>
                </div>
            </div>

        </div>

    );
};

export default Login;