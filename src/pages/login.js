import SectinonBannar from "@/components/shared/sectionbannar/sectionbannar";
import RootLayout from "@/layout/layout";
import { signIn } from "next-auth/react";
import React from "react";
import { SiGmail } from "react-icons/si";

const Login = () => {
  return (
    <div>
      <SectinonBannar
        title="Login"
        content="Login To Access Our PC Builder"
        bannar="https://images.pexels.com/photos/326508/pexels-photo-326508.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      />
      <div className="h-[80vh] flex justify-center items-center">
        <button
          className="flex items-center space-x-3 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded text-2xl"
          onClick={() =>
            signIn("google", {
              callbackUrl: "http://localhost:3000/",
            })
          }
        >
          <SiGmail /> <span className="ml-3">Login With Google</span>
        </button>
      </div>
    </div>
  );
};

export default Login;

Login.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
