import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";


const Login = () => {

  const {signIn,signGoogle}=useContext(AuthContext);

  const navigate=useNavigate();
  

    const handleLogin = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        signIn(email, password)
        .then(result => {
            const loggedUser = result.user;
            console.log(loggedUser);
            form.reset();
            navigate('/');

        })
        .catch(error => {
            console.log(error);
        })   
    }


    
    const handleGoogle=()=>{

      signGoogle()
      .then(result => {
          const loggedUser = result.user;
          console.log(loggedUser);
          navigate('/');
      })
      .catch(error => {
          console.log(error);
      })
  }



    return (
        <div className="min-h-screen hero bg-base-200">
        <div className="flex-col hero-content ">
          <div className="text-center ">
            <h1 className="text-5xl font-bold">Login now!</h1>
          </div>
          <div className="w-full max-w-sm shadow-2xl card bg-base-100 shrink-0">
            <form onSubmit={handleLogin} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" name="email" placeholder="email" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
              </div>
              <div className="mt-6 form-control">
                <button className="btn btn-primary">Login</button>
              </div>
            </form>

            <div>
              <p>or</p>
              <button onClick={handleGoogle} className="btn btn-link">Login with Google</button>
            </div>
            <p>New user?Please<Link to="/register">
            <button className="btn btn-link">Register</button></Link></p>
          </div>
        </div>
      </div>
    );
};

export default Login;