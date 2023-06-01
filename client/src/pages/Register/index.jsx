import { useState } from "react";
import { Link } from "react-router-dom";

const Register = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });

  const register = (e) => {
    e.preventDefault();
    console.log(user);
  };

  return (
    <div className="flex justify-center h-screen items-center bg-primary">
      <div className="bg-white p-5 w-[450px]">
        <form className="flex flex-col gap-5">
          <h1 className="text-2xl uppercase font-bold cursor-pointer text-secondary text-center">
            UdemyBlog | Register
          </h1>
          <input
            type="text"
            name="name"
            placeholder="Type your name"
            value={user.name}
            onChange={(e) => setUser({ ...user, name: e.target.value })}
          />
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
          <button
            className="bg-btn text-white h-10 uppercase"
            onClick={register}
          >
            Register
          </button>
          <Link to="/login" className="text-center text-secondary underline">
            Already have an account? Login
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Register;
