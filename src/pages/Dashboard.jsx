import React, { useEffect, useContext } from "react";
import AuthContext from "../context/auth/authContext";

const Dashboard = () => {
  const authContext = useContext(AuthContext);
  const { logout } = authContext;

  useEffect(() => {
    document.title = "Two Factor Authentication";
    document.head.lang = "en";
    authContext.loadUser();
    // eslint-disable-next-line
  }, []);
  return (
    <div>
      <h1>Hola!!</h1>
      <button
        className="inline-flex items-center text-white bg-blueGray-500 border-0 py-1 px-3 focus:outline-none hover:bg-blueGray-400 rounded text-base mt-4 md:mt-0"
        onClick={() => {
          logout();
        }}
      >
        Logout
        <svg
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          className="w-4 h-4 ml-1"
          viewBox="0 0 24 24"
        >
          <path d="M5 12h14M12 5l7 7-7 7"></path>
        </svg>
      </button>
    </div>
  );
};

export default Dashboard;
