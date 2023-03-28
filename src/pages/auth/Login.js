import { useState } from "react";
import Jumbotron from "../../components/cards/Jumbotron";
import axios from "axios";
import toast from "react-hot-toast";
import { useAuth } from "../../context/auth";
import { useNavigate, useLocation, Link } from "react-router-dom";

const Login=()=> {
  // state
  const [email, setEmail] = useState("faisalagriart@gmail.com");
  const [password, setPassword] = useState("MArt@msb2020");
  // hook
  const [auth, setAuth] = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  // console.log("location => ", location);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(`/login`, {
        email,
        password,
      });
      
      if (data?.error) {
        toast.error(data.error);
      } else {
        localStorage.setItem("auth", JSON.stringify(data));
        setAuth({ ...auth, token: data.token, user: data.user });
        toast.success("Login successful");        
        navigate(
          location.state ||
            `/dashboard/${data?.user?.role === "admin" ? "admin" : "user"}`
        );
        
      }
    } catch (err) {
      console.log(err);
      toast.error("Login failed. Try again.");
    }
  };

  return (
    <div>
      {/* <Jumbotron title="Login"  /> */}
      <div className="hero ">
        <div className="hero-content">
          <div className="card w-96 shadow-2xl bg-base-100">
             <form onSubmit={handleSubmit}>
              <div className="card-body">
                <h2 className="text-center text-xl my-4 text-[#001529]">Login</h2>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                  <input
                    type="email"
                    className="form-control mb-4 p-2 input input-bordered w-full max-w-lg"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                  <input
                    type="password"
                    className="form-control mb-4 p-2 input input-bordered w-full max-w-lg"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
              </div>
              <div className="form-control mt-6">
                  <button className="btn btn-primary">Login</button>
                  <span>New to HF Consultancy? <Link to='/register' className="text-blue-500 mt-2">Register</Link></span>
              </div>
            </div>
            </form>
          </div>
        </div>
      </div>
      {/* <div className="container mt-5">
        <div className="row">
          <div className="">
            <form onSubmit={handleSubmit}>
              <input
                type="email"
                className="form-control mb-4 p-2 input input-bordered w-full max-w-lg"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />

              <input
                type="password"
                className="form-control mb-4 p-2 input input-bordered w-full max-w-md"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />

              <button className="btn btn-primary" type="submit">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div> */}
    </div>
  );
}

export default Login;