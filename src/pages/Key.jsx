import React, { useEffect, useContext } from "react";
import AuthContext from "../context/auth/authContext";

const Dashboard = () => {
  const authContext = useContext(AuthContext);
  const key = localStorage.getItem("key");
  const { logout } = authContext;
  function handleCopy(key) {
    if (navigator.clipboard !== undefined) {
      // chrome
      navigator.clipboard
        .writeText(`${key}`)
        .then(function () {
          window.alert(`Copied ${key}`);
          logout();
        })
        .catch((err) => window.alert("Please try again!"));
      // @ts-ignore
    } else if (window.clipboardData) {
      // Internet Explorer
      // @ts-ignore
      window.clipboardData.setData(`${key}`);
    }
  }

  useEffect(() => {
    document.title = "Two Factor Authentication";
    document.head.lang = "en";
    authContext.loadUser();
    // eslint-disable-next-line
  }, []);
  return (
    <>
      <div className="container p-6">
        <div className="bg-white">
          <div className="xl:w-full bg-amber-200 border-b border-gray-300 dark:border-gray-700 py-5">
            <div className="flex items-center w-11/12 mx-auto">
                <p className="text-lg font-mono text-gray-800 dark:text-gray-100 font-bold">
                  Your Secret Key
                </p>
            </div>
            <div className="flex items-center w-11/12 mx-auto">
            <p className="text-md text-gray-800 dark:text-gray-100">
                Ssshhhh... Don't tell this to anyone! Copy it and keep it Safe! You will need it for logging in!
              </p>
            </div>
          </div>
          <div className="w-11/12 mx-auto bg-white">
            <div className="container bg-white mx-auto">
              <div className="my-8 text-2xl font-mono font-bold mx-auto xl:w-full xl:mx-0">{key}</div>
            </div>
          </div>
          <div className="w-full py-4 sm:px-12 px-4 bg-gray-200 dark:bg-gray-700 mt-6 flex justify-end rounded-bl rounded-br">
            {/* Copy Button */}
            <button
              className="bg-indigo-700 transition duration-150 ease-in-out hover:bg-indigo-600 rounded text-white px-8 py-2 text-sm focus:outline-none"
              type="submit"
              onClick={() => handleCopy(key)}
            >
              Copy
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
