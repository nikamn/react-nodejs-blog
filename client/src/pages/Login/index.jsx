import { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const login = (e) => {
    e.preventDefault();
    console.log(user);
  };

  return (
    <div className="flex justify-center h-screen items-center bg-primary">
      <div className="bg-white p-5 w-[450px]">
        <form className="flex flex-col gap-5">
          <h1 className="text-2xl uppercase font-bold cursor-pointer text-secondary text-center">
            UdemyBlog | Login
          </h1>
          <input
            type="email"
            name="email"
            placeholder="Type your email"
            value={user.email}
            onChange={(e) => setUser({ ...user, email: e.target.value })}
            autoComplete="on"
          />
          <input
            type="password"
            name="password"
            placeholder="Type your password"
            value={user.password}
            onChange={(e) => setUser({ ...user, password: e.target.value })}
            autoComplete="on"
          />
          <button className="bg-btn text-white h-10 uppercase" onClick={login}>
            Login
          </button>
          <Link to="/register" className="text-center text-secondary underline">
            Don&apos;t have an account yet? Register
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Login;
