import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";

const Register = () => {

  const {createUser}=useContext(AuthContext);
  console.log(createUser);

    const handleRegister = (e) => {
        e.preventDefault(); 
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, email, password);

        createUser(email, password)
        .then(result => {
            const loggedUser = result.user;
            console.log(loggedUser);
            form.reset();
        })
        .catch(error => {
            console.log(error);
        })  


    }
    return (
        <div>
            <div className="min-h-screen hero bg-base-200">
        <div className="flex-col hero-content ">
          <div className="text-center ">
            <h1 className="text-5xl font-bold">Login now!</h1>
          </div>
          <div className="w-full max-w-sm shadow-2xl card bg-base-100 shrink-0">
            <form onSubmit={handleRegister} className="card-body">
            <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input autoComplete="on" type="text" name="name" placeholder="Enter Your Name" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input autoComplete="on" type="email" name="email" placeholder="email" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input autoComplete="on" type="password" name="password" placeholder="password" className="input input-bordered" required />
               
              </div>
              <div className="mt-6 form-control">
                <button className="btn btn-primary">Register</button>
              </div>
            </form>
            <p className="px-4">Already have an account?Please<Link to="/login">
            <button className="btn btn-link">Login</button></Link></p>
          </div>
        </div>
      </div>
        </div>
    );
};

export default Register;