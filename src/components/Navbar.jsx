/* This example requires Tailwind CSS v2.0+ */
import { Fragment, useEffect, useContext } from "react";
import AuthContext from "../context/auth/authContext";
import { Popover, Transition } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import { Link } from "react-router-dom";
import * as ROUTES from "../constants/routes";

// function classNames(...classes) {
//   return classes.filter(Boolean).join(" ");
// }

export default function Example() {
  const authContext = useContext(AuthContext);
  const { logout, isAuthenticated } = authContext;

  useEffect(() => {
    document.title = "MLH INIT Challenges";
    document.head.lang = "en";
    authContext.loadUser();
    // eslint-disable-next-line
  }, []);
  return (
    <Popover className="relative bg-white z-50">
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="flex justify-between items-center border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10">
              <div className="flex justify-start lg:w-0 lg:flex-1">
                <Link to="/">
                  <span className="sr-only">🦈</span>

                  <h2 className="text-3xl">🦈</h2>
                </Link>
              </div>
              <div className="-mr-2 -my-2 md:hidden">
                <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                  <span className="sr-only">Open menu</span>
                  <MenuIcon className="h-6 w-6" aria-hidden="true" />
                </Popover.Button>
              </div>
              <Popover.Group as="nav" className="hidden md:flex space-x-10">
                <Link
                  to={ROUTES.EDUCATIONAL_PROJECT}
                  className="text-base font-medium text-gray-500 hover:text-gray-900"
                >
                  Educational
                </Link>
                <Link
                  to={ROUTES.SORTING}
                  className="text-base font-medium text-gray-500 hover:text-gray-900"
                >
                  Sorting
                </Link>
                <Link
                  to={ROUTES.ANIMATION}
                  className="text-base font-medium text-gray-500 hover:text-gray-900"
                >
                  Animation
                </Link>
                <a
                  href="https://mlh-init-weather.herokuapp.com/"
                  target="_blank"
                  className="text-base font-medium text-gray-500 hover:text-gray-900"
                  rel="noreferrer"
                >
                  2 APIs
                </a>
              </Popover.Group>
              <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
                {!isAuthenticated ? (
                  <>
                    <Link
                      to={ROUTES.LOGIN}
                      className="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900"
                    >
                      Login
                    </Link>
                    <Link
                      to={ROUTES.SIGNUP}
                      className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"
                    >
                      Sign up
                    </Link>
                  </>
                ) : (
                  <button
                    type="button"
                    onClick={() => logout()}
                    className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"
                  >
                    Logout
                  </button>
                )}
              </div>
            </div>
          </div>

          <Transition
            show={open}
            as={Fragment}
            enter="duration-200 ease-out"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="duration-100 ease-in"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <Popover.Panel
              focus
              static
              className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
            >
              <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
                <div className="pt-5 px-5">
                  <div className="flex items-center justify-between">
                    <div>
                      <Link to="/">
                        <span className="sr-only">🦈</span>

                        <h2 className="text-3xl">🦈</h2>
                      </Link>
                    </div>
                    <div className="-mr-2">
                      <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                        <span className="sr-only">Close menu</span>
                        <XIcon className="h-6 w-6" aria-hidden="true" />
                      </Popover.Button>
                    </div>
                  </div>
                  <div className="mt-6">
                    <nav className="grid gap-y-8"></nav>
                  </div>
                </div>
                <div className="py-6 px-5 space-y-6">
                  <div className="grid grid-cols-2 gap-y-8 gap-x-2">
                    <Link
                      to={ROUTES.EDUCATIONAL_PROJECT}
                      className="text-base font-medium text-gray-500 hover:text-gray-900"
                    >
                      Educational
                    </Link>
                    <Link
                      to={ROUTES.SORTING}
                      className="text-base font-medium text-gray-500 hover:text-gray-900"
                    >
                      Sorting List
                    </Link>
                    <Link
                      to={ROUTES.ANIMATION}
                      className="text-base font-medium text-gray-500 hover:text-gray-900"
                    >
                      Animation
                    </Link>
                    <a
                      href="https://mlh-init-weather.herokuapp.com/"
                      target="_blank"
                      className="text-base font-medium text-gray-500 hover:text-gray-900"
                      rel="noreferrer"
                    >
                      2 APIs
                    </a>
                  </div>
                  <div>
                    {!isAuthenticated ? (
                      <>
                        <Link
                          to={ROUTES.SIGNUP}
                          className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"
                        >
                          Sign up
                        </Link>
                        <p className="mt-6 text-center text-base font-medium text-gray-500">
                          Existing customer?{" "}
                          <Link
                            to={ROUTES.LOGIN}
                            className="text-indigo-600 hover:text-indigo-500"
                          >
                            Login
                          </Link>
                        </p>
                      </>
                    ) : (
                      <button
                        type="button"
                        onClick={() => logout()}
                        className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"
                      >
                        Logout
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </Popover.Panel>
          </Transition>
        </>
      )}
    </Popover>
  );
}
