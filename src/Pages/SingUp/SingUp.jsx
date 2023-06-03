import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import loginImg from '../../assets/images/login/login.svg';
import { AuthContext } from '../../Provider/AuthProvider';

const SingUp = () => {
    const [errorMessage, setErrorMessage] = useState('');
    const { createUser } = useContext(AuthContext)
    const handleSingUp = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        const confirmPass = form.confirmPassword.value;

        if (password !== confirmPass) {
            setErrorMessage('Passwords does not match');
            return;
        }
        createUser(email, password)
            .then(result => {
                const singUpUser = result.user
                console.log(singUpUser)
            })
            .then(error => console.log(error))

        console.log(email, password, confirmPass);
    };

    return (
        <div className="hero min-h-screen bg-white">
            <div className="hero-content flex-col lg:flex-row">
                <div className="text-center w-1/2 mr-5 lg:text-left">
                    <img src={loginImg} alt="" />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <h1 className="text-center text-3xl font-bold">Login now!</h1>
                        <form onSubmit={handleSingUp}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" placeholder="email" name="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="password" name="password" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Confirm Password</span>
                                </label>
                                <input type="password" placeholder="Confirm-password" name="confirmPassword" className="input input-bordered" />
                                {errorMessage && <p className="text-red-500">{errorMessage}</p>}
                            </div>
                            <div className="form-control mt-6">
                                <input className="btn btn-primary" type="submit" value="Sign Up" />
                            </div>
                        </form>

                        <div className="text-center">
                            <p className="text-[#737373]">
                                Already have an account? <Link className="text-[#FF3811]" to="/login">Sign In</Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingUp;
