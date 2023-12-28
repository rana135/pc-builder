import { useSession } from "next-auth/react";
import Link from "next/link";
import { useState } from "react";
import { IoIosClose } from "react-icons/io";
import { RiMenu2Fill } from "react-icons/ri";
import { signOut } from "next-auth/react";

const Header = () => {
  const [open, setOpen] = useState(false);
  const [submenuOpen, setSubmenuOpen] = useState(false);
  // const user = "nisharga";
  const { data: session } = useSession();
  return (
    <nav className="z-[60] sticky top-0 p-4 text-white bg-[#07091E] ">
      <div className="container mx-auto p-1 relative">
        <div className="md:flex md:justify-between md:items-center">
          {/* first part */}
          <div className="flex items-center">
            <RiMenu2Fill
              onClick={() => setOpen(!open)}
              className="me-3 lg:hidden cursor-pointer  text-4xl text-primary"
            />
            <div className="mx-auto">
              <Link to="/someRoute">PC Builder</Link>
            </div>
          </div>
          {/* second part */}
          <ul className="hidden lg:flex font-semibold space-x-10">
            <li className="hover:text-primary cursor-pointer transition-all delay-100 duration-300">
              <span>
                <Link to="/someRoute">Home</Link>
              </span>
            </li>
            <li className="hover:text-primary cursor-pointer transition-all delay-100 duration-300">
              <span>
                <Link to="/someRoute">Features</Link>
              </span>
            </li>
          </ul>
          {/* third part space-x-4 hidden md:block */}
          <div className="hidden md:flex space-x-4">
            <div className="text-lg font-bold mt-2 uppercase">
              {data?.user?.name}
            </div>
            <div>
              {/* conditioning outLout and SignIn button*/}
              {user ? (
                <button
                  onClick={() => signOut()}
                  className="transition-all delay-100 duration-300 font-semibold text-white px-8 py-2 rounded-full bg-gradient-to-r from-[#00B6BD] to-[#ACFFAD]"
                >
                  Log Out
                </button>
              ) : (
                <Link
                  to="/signin"
                  className="transition-all delay-100 duration-300 font-semibold text-white px-8 py-2 rounded-full bg-gradient-to-r from-[#00B6BD] to-[#ACFFAD]"
                >
                  {" "}
                  Signin
                </Link>
              )}
              {/* conditioning outLout and SignIn button*/}
            </div>
          </div>
        </div>
        {/* mobile navbar */}
        <div
          className={`lg:hidden bg-[#001356] text-white w-[280px] md:w-[260px] h-screen absolute ${
            open
              ? "-top-2 -left-2 transition-all duration-700 "
              : "top-0 -left-full transition-all duration-1000 delay-300"
          }`}
        >
          <div className="bg-white p-[17px] flex justify-between items-center">
            <span className="cursor-pointer">Logo</span>
            <IoIosClose
              className="text-3xl text-[#001356] font-bold cursor-pointer transition-all duration-200"
              onClick={() => setOpen(!open)}
            />
          </div>
          <ul className="space-y-3 text-sm cursor-pointer">
            <li className="" style={{ borderBottom: "1px solid #F8908B" }}>
              <div onClick={() => setSubmenuOpen(!submenuOpen)} className="p-3">
                <Link to="/someRoute">Home</Link>
              </div>
              {/* submenu */}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
