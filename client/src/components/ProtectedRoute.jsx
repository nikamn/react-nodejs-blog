import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { GetUser } from "../api/users";
import { toast } from "react-hot-toast";

const ProtectedRoute = ({ children }) => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  const getUser = async () => {
    try {
      const response = await GetUser();
      if (response.success) {
        toast.success(response.message);
        setUser(response.data);
      } else {
        toast.error(response.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  useEffect(() => {
    if (localStorage.getItem("token")) {
      getUser();
    } else {
      navigate("/login");
    }
  }, [navigate]);

  return (
    user && (
      <div>
        <p>{user.name}</p>
        <p>{user.email}</p>
        <br />
        {children}
      </div>
    )
  );
};

ProtectedRoute.propTypes = {
  children: PropTypes.any,
};

export default ProtectedRoute;
