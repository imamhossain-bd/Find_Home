

import { Link } from "react-router-dom";
import UseAuth from "../../Hooks/UseAuth";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
const Register = () => {


    const [showPassword, setShowPassword] = useState(false);
    const handelPassword = () =>{
        setShowPassword(!showPassword)
    }

    const location = useLocation();
    const navigate = useNavigate()

    const { createUser, upDateUserProfile } = UseAuth()
    const handelRegister = e =>{
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const name = form.get('name');
        const email = form.get('email');
        const photo = form.get('photo');
        const password = form.get('password');

            
        createUser(email, password)
        .then(() =>{
            upDateUserProfile(name, photo)
            .then(()=>{
                navigate(location?.state ? location.state : '/')
            })
        })
    }


    return (
        <div className="px-16">
            <div className="hero min">
                <div className="hero-content">
                    <div className="card shrink-0 shadow-2xl bg-base-100">
                    <h2 className="text-center mt-5 text-xl font-bold">Please Registration</h2>
                        <form onSubmit={handelRegister} className="card-body w-[400px]">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text"name="name" placeholder="Name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email"name="email" placeholder="Email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo Url</span>
                                </label>
                                <input type="text"name="photo" placeholder="Photo url" className="input input-bordered" required />
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
                                <button className="btn btn-primary">Registration</button>
                            </div>
                        </form>
                        <p className="text-center mb-6">Already have an Account? <Link to='/login'><span className="text-[#FF8C47]">Login</span></Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;