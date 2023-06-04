import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import { RegisterUser } from "../../api/users";
import { toast } from "react-hot-toast";

const Register = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });

  const register = async (e) => {
    e.preventDefault();
    console.log(user);
    try {
      const response = await RegisterUser(user);
      if (response.success) {
        navigate("/login");
        toast.success(response.message);
      } else {
        toast.error(response.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
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
          <Button
            title="Register"
            onClick={register}
            disabled={
              user.name.length < 3 ||
              user.email.length < 3 ||
              user.password.length < 3
            }
          />
          <Link to="/login" className="text-center text-secondary underline">
            Already have an account? Login
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Register;
