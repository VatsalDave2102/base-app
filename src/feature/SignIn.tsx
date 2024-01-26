import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/auth/useAuth";
import { useState } from "react";
import { BrandRoot } from "../components/Brand";
import Footer from "../components/Footer";
import Icon from "../components/Icon";
import Input from "../components/Input";
import MobileFooter from "../components/MobileFooter";
import OtherSignInOptions from "../components/OtherSignInOptions";
import SignupBackground from "../components/SignupBackground";

const Signup = () => {
  const AuthContext = useAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassWord] = useState("");

  const handleSignin = () => {
    AuthContext?.setAuthUser(email);
    AuthContext?.setIsLoggedIn(true);
    navigate("/");
  };
  return (
    <div className="w-full signup_container relative h-screen">
      <SignupBackground />

      {/* Container for content */}
      <div className="content relative z-1 h-screen flex justify-between">
        {/* Left side */}
        <div className="left hidden lg:flex flex-col lg:w-1/3 px-14 pt-12 pb-14 justify-between overflow-y-auto">
          <Icon />
          <h1 className="uppercase font-bold text-white text-7xl font-montserrat text-center">
            Base
          </h1>
          <Footer />
        </div>

        {/* Right side */}
        <div className="right w-full lg:w-1/2 overflow-hidden">
          <header className="block lg:hidden bg-secondary px-4 py-4">
            <BrandRoot>
              <img src="/subtract2.svg" alt="" className="block lg:hidden" />
              <img src="/subtract3.svg" alt="" />
              <h1 className="text-[#FAFAFB] font-nunito text-xl">Base</h1>
            </BrandRoot>
          </header>
          {/* Container for signin form */}
          <div className="signin_form mt-8 max-w-[420px] lg:mt-36 px-4 mx-auto">
            {/* Heading */}
            <h1 className="font-montserrat font-bold text-4xl subpixel-antialiased mb-2">
              Sign In
            </h1>
            <p className="font-lato mb-4 text-sm">Sign in to your account</p>

            {/* Other signin options */}
            <OtherSignInOptions />

            {/* Signin Form */}
            <div className="signin_fields bg-white p-5 rounded-xl flex flex-col gap-3 mb-3">
              <Input
                label="Email address"
                type="email"
                fieldHandler={setEmail}
                value={email}
              />
              <Input
                label="Password"
                type="password"
                fieldHandler={setPassWord}
                value={password}
              />
              <a href="" className="no-underline">
                Forgot Password
              </a>
              <button
                className="bg-secondary text-white w-full rounded-lg py-2 font-montserrat font-semibold hover:bg-opacity-70 disabled:bg-opacity-25"
                onClick={handleSignin}
                disabled={email == "" || password == ""}
              >
                Sign In
              </button>
            </div>

            <div className="font-lato flex flex-col justify-center items-center lg:flex-row gap-2 lg:gap-1 mb-4">
              <p> Don't have an account?</p>
              <a href="" className="no-underline">
                Register here
              </a>
            </div>
            <div className="block lg:hidden footer_container">
              <MobileFooter />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
