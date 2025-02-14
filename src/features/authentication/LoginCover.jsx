import { useNavigate } from "react-router-dom";

function LoginCover() {
  const navigate = useNavigate();
  return (
    <div className="bg-gradient-to-r rounded-lg from-slate-700 to-purple-600 flex flex-col gap-4 justify-center space-y-5 px-10 py-16 text-white h-auto text-center">
      <h1 className="text-4xl font-semibold">Welcome to WalCart</h1>
      <p className="text-xl">Don't have an account?</p>
      <button
        onClick={() => navigate("/signup")}
        className="text-white rounded-3xl px-6 py-3 border border-white text-lg transition duration-300 hover:bg-white hover:text-black"
      >
        Sign Up
      </button>
    </div>
  );
}

export default LoginCover;
