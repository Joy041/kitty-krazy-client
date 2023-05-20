import { useContext, useState } from 'react';
import { FaGoogle, FaGithub } from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';
import Swal from 'sweetalert2';


const Register = () => {
    const [error, setError] = useState('')
    const [success, setSuccess] = useState('')
    const { register, profile, verification, googleLogin, githubLogin } = useContext(AuthContext)
    const navigate = useNavigate()


    const handleRegisterForm = (event) => {
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
        const confirm = form.confirm.value;

        setError('')
        setSuccess('')

        if (password !== confirm) {
            alert('confirm password not match')
            return;
        }

        else if (password.length < 8) {
            setError('Should contain at last 8 characters')
            return;
        }

        else if (!/(?=.*\d)/.test(password)) {
            setError('Should contain at last one digit')
            return;
        }

        else if (!/(?=.*[A-Z])/.test(password)) {
            setError('Should contain at last one upper case')
            return;
        }

        else if (!/(?=.*[a-z])/.test(password)) {
            setError('Should contain at last one lower case')
            return;
        }

        register(email, password)
            .then(result => {
                const loggedUser = result.user;
                userProfile(loggedUser, name, photo)
                userVerification(loggedUser)
                form.reset()
                navigate('/login')

                Swal.fire({
                    title: 'Success!',
                    text: 'Register successful',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                })
            })
            .catch(error => {
                setError(error)
            })
    }

    const userProfile = (user, name, photo) => {
        profile(user, name, photo)
            .then(() => { })
            .catch(error => setError(error))
    }

    const userVerification = (user) => {
        verification(user)
            .then(() => {
                alert('Check your email')
                return
            })
    }

    const handleGoogleRegister = () => {
        googleLogin()
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser)
                navigate('/login')

                Swal.fire({
                    title: 'Success!',
                    text: 'Register successful',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                })
            })
            .catch(error => setError(error.message))
    }


    const handleGithubRegister = () => {
        githubLogin()
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser)
                navigate('/login')

                Swal.fire({
                    title: 'Success!',
                    text: 'Register successful',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                })
            })
            .catch(error => setError(error.message))
    }

    return (
        <div className="hero py-16 bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Register now!</h1>
                    <p className="py-6">Please register your account for take our service and connect with us!!</p>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <form onSubmit={handleRegisterForm}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" placeholder="name" name='name' required className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo</span>
                                </label>
                                <input type="text" placeholder="photo" name='photo' required className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" placeholder="email" name='email' required className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="password" name='password' required className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text"> Confirm Password</span>
                                </label>
                                <input type="password" placeholder="confirm password" name='confirm' required className="input input-bordered" />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <p className='text-danger'>{error}</p>
                                <p className='text-success'>{success}</p>
                                <button className="btn btn-primary">Register</button>
                            </div>
                            <div className='form-control'>
                                <p className='mt-3 text-center'>Already Have An Account ? <Link to='/login' className='text-decoration-none text-primary'>Login</Link></p>
                                <div className="divider">OR</div>
                                <button type="submit" onClick={handleGoogleRegister} className=' btn w-100 bg-white text-black border-dark fw-semibold'>
                                    <FaGoogle className='mr-1'></FaGoogle> Register with Google
                                </button>
                                <button type="submit" onClick={handleGithubRegister} className='btn w-100 bg-white text-black border-dark fw-semibold mt-4'>
                                    <FaGithub className='mr-1'></FaGithub> Register with Github
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;