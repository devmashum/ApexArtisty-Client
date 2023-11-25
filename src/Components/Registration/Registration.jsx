import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProviders";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import Swal from "sweetalert2";
import GoogleSignIn from "../GoogleSignIn/GoogleSignIn";
import useAxiosPublic from "../../Hooks/useAxiosPublic";


const Registration = () => {
    const axiosPublic = useAxiosPublic();
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    const { createUser, updateUserProfile } = useContext(AuthContext);
    const handleRegistration = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, photo, email, password)
        const userInfo = {
            email: email,
            name: name
        }
        axiosPublic.post('/users', userInfo)
            .then(res => {
                console.log(res.data);
            })
        createUser(email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser)
                updateUserProfile(name, photo)
                    .then(() => {
                        console.log('user profile info updated')
                    })
                    .catch(error => console.log(error))
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "User Created Successfully",
                    showConfirmButton: false,
                    timer: 1500
                });
                navigate(from, { replace: true });
            })
    }
    return (
        <>
            <Helmet> <title> ApexArtistry | Registration</title></Helmet>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Registration!</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    </div>
                    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleRegistration} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input
                                    name="name"
                                    type="text" placeholder="Name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Image URL</span>
                                </label>
                                <input
                                    name="photo"
                                    type="text" placeholder="Image URL" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input
                                    name="email"
                                    type="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input
                                    name="password"
                                    type="password" placeholder="password" className="input input-bordered" required />

                            </div>
                            <div className="form-control mt-6">
                                <button type="submit" className="btn btn-primary">Registration</button>
                            </div>

                            <h1 className="text-xl">Already Registered ! <Link className="text-xl text-blue-600 font-bold" to={'/login'}>Login</Link></h1>
                        </form>
                        <GoogleSignIn></GoogleSignIn>
                    </div>
                </div>
            </div></>
    );
};

export default Registration;