import Link from "next/link";
import { useState } from "react";
import { AiOutlineArrowUp } from "react-icons/ai";
import { AiOutlineArrowDown } from "react-icons/ai";

const Dropd = () => {
  const [navbar, setNavbar] = useState(false);

  // dropdown
  const [isOpen, setIsOpen] = useState(false);

  /* const toggleDropdown = () => {
    setIsOpen(!isOpen);
  }; */

  return (
    <nav className="w-full bg-white shadow">
      <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
        <div>
          <div className="flex items-center justify-between py-3 md:py-5 md:block">
            <Link href="/">
              <h2 className="text-2xl font-bold">PC Crafter</h2>
            </Link>
            <div className="md:hidden">
              <button
                className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                onClick={() => setNavbar(!navbar)}
              >
                {navbar ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
        <div>
          <div
            className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
              navbar ? "block" : "hidden"
            }`}
          >
            <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0 text-center">
              <li className="text-gray-600 hover:text-blue-600">
                <Link href="/">Home</Link>
              </li>
              <li className="text-gray-600 hover:text-blue-600">
                <Link href="/login">Login</Link>
              </li>

              <div className="relative inline-block text-left">
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  type="button"
                  className="inline-flex justify-center  "
                  id="options-menu"
                  aria-haspopup="true"
                  aria-expanded="true"
                >
                  <span className="flex items-center space-x-2">
                    Categories
                    {isOpen ? <AiOutlineArrowUp /> : <AiOutlineArrowDown />}
                  </span>
                </button>

                <div
                  className={`${
                    isOpen ? "block" : "hidden"
                  } origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none`}
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="options-menu"
                >
                  <div className="py-1" role="none">
                    <Link
                      href="/category/ram"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-indigo-100 hover:text-indigo-900"
                      role="menuitem"
                    >
                      Ram
                    </Link>
                    <Link
                      href="/category/cpu"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-indigo-100 hover:text-indigo-900"
                      role="menuitem"
                    >
                      Cpu
                    </Link>
                    <Link
                      href="/category/motherboard"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-indigo-100 hover:text-indigo-900"
                      role="menuitem"
                    >
                      Motherboard
                    </Link>
                    <Link
                      href="/category/power-supply-unit"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-indigo-100 hover:text-indigo-900"
                      role="menuitem"
                    >
                      Power Supply
                    </Link>
                    <Link
                      href="/category/storage"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-indigo-100 hover:text-indigo-900"
                      role="menuitem"
                    >
                      Storage
                    </Link>
                    <Link
                      href="/category/monitor"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-indigo-100 hover:text-indigo-900"
                      role="menuitem"
                    >
                      Monitor
                    </Link>
                  </div>
                </div>
              </div>

              <li className="text-gray-600 hover:text-blue-600">
                <Link
                  href="/pcbuilder"
                  className="block w-full rounded border border-blue-600 px-12 py-3 text-sm font-medium bg-blue-600 text-[#fff] hover:text-[#000] focus:outline-none focus:ring active:bg-blue-500 sm:w-auto text-center"
                >
                  PC Builder
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Dropd;
