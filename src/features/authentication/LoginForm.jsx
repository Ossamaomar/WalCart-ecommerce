import { Button, Input } from "@heroui/react";
import { useForm } from "react-hook-form";
import useSignin from "./useSignin";
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import PulseLoader from "react-spinners/PulseLoader";
import { useUserContext } from "../../contexts/UserContext";
import { veifyToken } from "../../services/apiAuth";

function LoginForm() {
  const { register, formState, handleSubmit, reset } = useForm();
  const { errors } = formState;

  const { signinMutateFn, isPending, isSuccess } = useSignin();
  const navigate = useNavigate();
  const { setUserToken, setUserData, setUserId } = useUserContext();

  async function verifyUser(userToken) {
    const res = await veifyToken(userToken);
    // console.log(res)
    localStorage.setItem("userId", JSON.stringify(res?.data?.decoded?.id));
    setUserId(res?.data?.decoded?.id);
    // console.log("Hi");
  }
  function onSubmit(data) {
    signinMutateFn(data, {
      onSuccess: async (data) => {
        reset();
        localStorage.setItem("userToken", data.data.token);
        localStorage.setItem("userData", JSON.stringify(data.data.user));
        setUserToken(data.data.token);
        setUserData(data.data.user);
        // console.log(data.data.token)
        await verifyUser(data.data.token);
      },
    });
  }

  function onError(err) {
    // console.log(err);
  }

  useEffect(() => {
    if (isSuccess && !isPending) {
      navigate("/");
    }
  }, [isPending, isSuccess, navigate]);
  return (
    <form
      onSubmit={handleSubmit(onSubmit, onError)}
      className="text-lg md:w-[400px] px-5 pb-5"
    >
      <h2 className="text-4xl font-light mb-20 mt-5">Sign In</h2>
      <Input
        isRequired
        isDisabled={isPending}
        errorMessage={errors?.email?.message}
        isInvalid={errors?.email?.message}
        size="lg"
        label="Email"
        labelPlacement="outside"
        type="email"
        placeholder="email"
        variant="underlined"
        className={'mb-10'}
        {...register("email", {
          required: "This input field is required",
          pattern: {
            value: /\S+@\S+\.\S+/,
            message: "Please provide a valid email address",
          },
        })}
      />
      <Input
        isRequired
        isDisabled={isPending}
        errorMessage={errors?.password?.message}
        isInvalid={errors?.password?.message}
        size="lg"
        label="Password"
        labelPlacement="outside"
        type="password"
        placeholder="password"
        variant="underlined"
        className={'mb-5'}
        {...register("password", {
          required: "This input field is required",
          minLength: {
            value: 8,
            message: "Password needs a minimum of 8 characters",
          },
        })}
      />
      <Link to={'/forgotPassword'} className="block text-right text-sm text-purple-600 underline">Forgot your password?</Link>
      <Button
        className="bg-purple-600 border text-white text-lg px-6 py-6 rounded-2xl hover:bg-white hover:text-black hover:border-black"
        variant="flat"
        type="submit"
        isDisabled={isPending}
      >
        {isPending ? <PulseLoader color="#fff" /> : "Sign In"}
      </Button>

      
    </form>
  );
}

export default LoginForm;
