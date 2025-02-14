import { Helmet } from "react-helmet";
import SignupForm from "../features/authentication/SignupForm";


function Signup() {

  return (
    <div className="flex flex-col justify-center w-full my-20">
      <Helmet>
        <meta charSet="utf-8" />
        <title>WalCart | Signup</title>
      </Helmet>
      <h2 className="text-4xl font-light mb-20">Register</h2>
      <SignupForm />
    </div>
  );
}

export default Signup;
