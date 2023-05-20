import { useContext, useRef, useState } from "react";
import { FaGoogle, FaGithub } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../Provider/AuthProvider";


const Login = () => {
    const [error, setError] = useState('')
    const emailRef = useRef();
    const { login, passwordReset, googleLogin, githubLogin } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || '/'

    const handleLoginForm = (event) => {
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        console.log(email, password)

        setError('')

        login(email, password)
            .then(result => {
                const loggedUser = result.user;
                form.reset()

                const user = {
                    email: loggedUser.email
                }

                fetch('https://kitty-krazy-server.vercel.app/tokens', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(user)
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log('jwt', data)
                        localStorage.setItem('kitty-access-token', data.token)
                        navigate(from, { replace: true })
                    })

                Swal.fire({
                    title: 'Success!',
                    text: 'Login successful',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                })
            })
            .catch(error => setError(error.message))
    }

    const handleForgetPass = () => {
        const email = emailRef.current.value
        passwordReset(email)
            .then(() => {
                alert('Check your email')
                return
            })
            .catch(error => setError(error.message))

    }

    const handleGoogleLogin = () => {
        googleLogin()
            .then(result => {
                const loggedUser = result.user;

                const user = {
                    email: loggedUser.email
                }

                fetch('https://kitty-krazy-server.vercel.app/tokens', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(user)
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log('jwt', data)
                        localStorage.setItem('kitty-access-token', data.token)
                        navigate(from, { replace: true })
                    })

                Swal.fire({
                    title: 'Success!',
                    text: 'Login successful',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                })
            })
            .catch(error => setError(error.message))
    }

    const handleGithubLogin = () => {
        githubLogin()
            .then(result => {
                const loggedUser = result.user;

                const user = {
                    email: loggedUser.email
                }

                fetch('https://kitty-krazy-server.vercel.app/tokens', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(user)
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log('jwt', data)
                        localStorage.setItem('kitty-access-token', data.token)
                        navigate(from, { replace: true })
                    })

                Swal.fire({
                    title: 'Success!',
                    text: 'Login successful',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                })
            })
            .catch(error => setError(error.message))
    }

    return (
        <div className="hero py-16 bg-base-200 mt-6">
            <div className="hero-content flex-col lg:flex-row">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                    <p className="py-6">Please login your account for take our service and connect with us!!</p>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <form onSubmit={handleLoginForm}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" placeholder="email" name='email' ref={emailRef} required className="input input-bordered" />

                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="password" name='password' required className="input input-bordered" />
                                <label className="label">
                                    <a href="#" onClick={handleForgetPass} className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <p className='text-danger'>{error}</p>
                                <button className="btn btn-primary">Login</button>
                            </div>
                            <div className='form-control'>
                                <p className='mt-3 text-center'>Do not Have An Account ? <Link to='/register' className='text-decoration-none text-primary'>Register</Link></p>
                                <div className="divider">OR</div>
                                <button type="submit" onClick={handleGoogleLogin} className=' btn w-100 bg-white text-black border-dark fw-semibold'>
                                    <FaGoogle className='mr-1'></FaGoogle> Login with Google
                                </button>
                                <button type="submit" onClick={handleGithubLogin} className='btn w-100 bg-white text-black border-dark fw-semibold mt-4'>
                                    <FaGithub className='mr-1'></FaGithub> Login with Github
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;