import React, { createContext, useState, useContext, useEffect } from "react";
import Loader from "../loader/Loader";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => { 
  const navigate = useNavigate();
  const [user, setUser] = useState(false);
  const [userData, setUserData] = useState({
    name: "",
    surname: "",
    email: "",
    phone_number: "",
  });
  const [loading, setLoading] = useState(false);

  const fetchUserData = async (token) => {
    setLoading(true);
    try {
      const response = await axios.get("https://approcket.kz/api/user/info", {
        headers: { Authorization: `Bearer ${token}` },
      });
      if (response.data.success) {
        setUser(true);

        const userInfo = response.data.user[0];
        setUserData({
          name: userInfo.name || "",
          surname: userInfo.surname || "",
          email: userInfo.email || "",
          phone_number: userInfo.phone_number || "",
        });
      }
    } catch {
      localStorage.removeItem("auth_token");
      setUser(false);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const token = localStorage.getItem("auth_token");
    if (token) {
      fetchUserData(token);
    }
  }, []);

  const login = async (email, password) => {
    setLoading(true);
    try {
      const response = await axios.post("https://approcket.kz/api/user/auth", {
        login: email,
        password: password,
      });

      if (response.data.success) {
        const token = response.data.auth_token;
        localStorage.setItem("auth_token", token);

        await fetchUserData(token);

        return true;
      }
      return false;
    } catch {
      return false;
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    localStorage.removeItem("auth_token");
    navigate({ pathname: "/" });
    setUser(false);
  };

  return (
    <AuthContext.Provider value={{ user, userData, login, logout }}>
      <Loader isOpen={loading} />
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
