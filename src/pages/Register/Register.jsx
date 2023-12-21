import { FaEye, FaEyeSlash, FaGithub } from 'react-icons/fa';
import { Link, Navigate } from "react-router-dom";
import { useContext, useState } from "react";
import { updateProfile } from "firebase/auth";
import { FcBusinessman, FcGoogle } from 'react-icons/fc';
import Swal from 'sweetalert2';
import { AuthContext } from '../../AuthProvider/AuthProvider';

const Register = () => {
    const { createUser, signInWithGoogle } = useContext(AuthContext);
    const [showPassword, setShowPassword] = useState(false);

    const handleRegister = e => {
        e.preventDefault();
        const name = e.target.name.value;
        const photoUrl = e.target.photo.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        const accepted = e.target.terms.checked;

        //password verification
        if (password.length < 6) {
            Swal.fire("Opps!", "Password should be at least 6 characters or longer", "error");
            return;
        }
        else if (!/[A-Z]/.test(password)) {
            Swal.fire("Opps!", "Your password should have at least an uppercase character", "error");
            return;
        }
        else if (!/[^\w]/.test(password)) {
            Swal.fire("Opps!", "Your password should have at least a special character", "error");
            return;
        }
        else if (!accepted) {
            Swal.fire("Opps!", "Your should have accepted our terms and condition", "error");
            return;
        }

        createUser(email, password)
            .then(result => {
                console.log(result.user);
                Swal.fire("Great!", "Registration successfull", "success");
                updateProfile(result.user, {
                    displayName: name,
                    photoURL: photoUrl
                })
                e.target.reset();
            })
            .catch(error => {
                Swal.fire("Opps!", error.message, "error");
            })

    }

    const handleGoogleSignIn = () => {
        signInWithGoogle()
            .then(result => {
                console.log(result.user)
                Navigate(location?.state ? location.state : "/")
            })
            .catch(error => {
                console.log(error)
            })
    }

    return (
        <div className="my-16 p-5">
            <div className='relative shadow-xl md:w-[600px] mx-auto outline p-6 outline-green-500 rounded-lg'>
                <form onSubmit={handleRegister}>
                    <div className='flex flex-col md:flex-row justify-between mt-5'>
                        <div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-xl font-medium ">Name</span>
                                </label>
                                <input type="text" name="name" placeholder="Youe name" className="input w-full md:w-[250px] input-bordered input-success" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-xl font-medium">Photo URL</span>
                                </label>
                                <input type="text" name="photo" placeholder="photo url" className="input input-bordered input-success w-full md:w-[250px]" />
                            </div>
                        </div>

                        <div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-xl font-medium">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="Your email" className="input input-bordered input-success w-full md:w-[250px]" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-xl font-medium">Password</span>
                                </label>

                                <div className="relative">
                                    <input
                                        type={showPassword ? "text" : "password"}
                                        name="password" placeholder="password" className="input input-bordered input-success w-full md:w-[250px]" required />
                                    <span className="absolute top-4 right-4" onClick={() => setShowPassword(!showPassword)}>
                                        {
                                            showPassword ? <FaEye></FaEye> : <FaEyeSlash></FaEyeSlash>
                                        }
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex gap-2 mt-4 text-lg font-medium">
                        <input type="checkbox" name="terms" />
                        <label htmlFor="terms">Accept our <a href="#">terms and conditions!</a></label>
                    </div>

                    <div className="form-control mt-6">
                        <button className="text-lg btn bg-green-500 hover:bg-green-600 text-white font-semibold">Register</button>
                    </div>
                </form>

                <div className="divider text-xl font-medium">OR</div>
                {/* continue with google */}
                <div className="flex gap-6 justify-center">
                    <div className="flex items-center justify-center border-solid border-2 border-green-300 hover:text-green-500 p-2 text-xl rounded-lg font-bold">
                        <FcGoogle className="text-2xl mr-1"></FcGoogle>
                        <button onClick={handleGoogleSignIn}>Google</button>
                    </div>
                    <div className="flex items-center justify-center border-solid border-2 border-green-300 hover:text-green-500 p-2 text-xl rounded-lg font-bold">
                        <FaGithub className="text-2xl mr-1 text-black"></FaGithub>
                        <button onClick={handleGoogleSignIn}>Github</button>
                    </div>
                </div>

                <div className="absolute top-[-50px] left-[150px] md:left-[250px]">
                    <FcBusinessman className="text-8xl p-2 bg-green-200 border rounded-full"></FcBusinessman>
                </div>
                <p className="mt-4 text-center text-xl font-medium">Already have an account? Please <Link className="text-green-500 font-bold underline" to="/login">Login</Link></p>
            </div>
        </div>
    );
};

export default Register;