import { Helmet } from "react-helmet";
import LoginCover from "../features/authentication/LoginCover";
import LoginForm from "../features/authentication/LoginForm";

function Login() {
  return (
    <div className="shadow-lg border dark:border-purple-400 w-fit rounded-lg mx-auto flex flex-col md:flex-row md:h-[550px] justify-center my-20 gap-6 md:gap-0">
      <Helmet>
        <meta charSet="utf-8" />
        <title>WalCart | Login</title>
      </Helmet>
      <LoginCover />
      <LoginForm />
    </div>
  );
}

export default Login;
