// @ts-check
import { useEffect, useContext } from "react";
import AuthContext from "../context/auth/authContext";

const Dashboard = () => {
  const authContext = useContext(AuthContext);
  const { logout } = authContext;

  useEffect(() => {
    document.title = "MLH INIT Challenges";
    document.head.lang = "en";
    authContext.loadUser();
    // eslint-disable-next-line
  }, []);
  return (
    <>
      <div>
        <div>
          <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div className="sm:text-center lg:text-left">
              <h1 className="text-4xl tracking-tight font-extrabold text-amber-200 sm:text-5xl md:text-6xl">
                <span className="block xl:inline">Welcome To</span>
                <br />
                <span className="block text-amber-400 mt-2">BLAHAJ Gang!</span>
              </h1>
              <p className="mt-3 font-mono font-bold italic text-white sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                BLAHAJ is not just a shark plushie. It is a way of living.
              </p>
              <p className="mt-3 font-mono font-bold text-amber-200 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                BLAHAJ continues to amass more and more followers everyday,
                while Ryan Swift lives in denial of it's power. This
                cult-slash-club has become widely known, making appearances at
                different events across the globe.
              </p>
              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                {/* <div className="rounded-md shadow">
                  <a href="/" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10">
                    Get started
                  </a>
                </div> */}
                <div className="mt-3 sm:mt-1">
                  <button
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 md:py-4 md:text-lg md:px-10"
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
                      className="w-4 h-4"
                      viewBox="0 0 24 24"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </main>
        </div>
        <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
          <img
            className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-auto lg:mt-24"
            src="https://sadanduseless.b-cdn.net/wp-content/uploads/2018/10/ikea-shark6.jpg"
            alt="Plushie"
          />
        </div>
        {/* <div className="m-5 py-5">
          <button
            className="inline-flex items-center text-white bg-blueGray-500 border-0 py-1 px-3 focus:outline-none hover:bg-blueGray-400 rounded text-base m-6 md:mt-0"
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
        </div> */}
      </div>
    </>
  );
};

export default Dashboard;
