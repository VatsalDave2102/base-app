import ButtonWithIcon from "./ButtonWithIcon";

const OtherSignInOptions = () => {
  return (
    <div className="other_signin_options flex gap-6 mb-8">
      <div className="google_signin">
        <ButtonWithIcon
          src="/google-icon 1.png"
          alt="Google Icon"
          text="Sign in with Google"
        />
      </div>
      <div className="apple_singin">
        <ButtonWithIcon
          src="/apple 1.png"
          alt="Apple Icon"
          text="Sign in with Apple"
        />
      </div>
    </div>
  );
};

export default OtherSignInOptions;
