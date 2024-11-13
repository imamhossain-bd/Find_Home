
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import SocialLogin from "../../Components/SocialLogin/SocialLogin";
import UseAuth from "../../Hooks/UseAuth";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useState } from "react";


const Login = () => {

    const [showPassword, setShowPassword] = useState(false);
    const handelPassword = () =>{
        setShowPassword(!showPassword)
    }


    const {signIn} = UseAuth();
    const location = useLocation();
    const navigate = useNavigate()


    const handelLogin = e =>{
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const email = form.get('email')
        const password = form.get('password');

        signIn(email, password)
        .then(() =>{
            navigate(location?.state ? location.state : '/')
        })
    }


    return (
        <div className="px-16">
            <div className="hero min">
                <div className="hero-content">
                    <div className="card shrink-0 shadow-2xl bg-base-100">
                        <h2 className="text-center mt-5 text-xl font-bold">Login</h2>
                        <form onSubmit={handelLogin} className="card-body w-[400px]">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email"name="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <div className="flex justify-end items-center relative">
                                <input type={showPassword ? "text" : "password"} name="password" placeholder="password" className="w-full input input-bordered" required />
                                    <p onClick={handelPassword} className="absolute cursor-pointer hover:text-red-600 mr-4">
                                        {showPassword ? <FaEyeSlash />:<FaEye></FaEye>}
                                        </p>
                                </div>
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>
                        </form>
                        
                        <p className="text-center mb-3">Do not have an Account? <Link to='/register'><span className="text-[#FF8C47]">Register</span></Link></p>
                        
                    <SocialLogin></SocialLogin>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;