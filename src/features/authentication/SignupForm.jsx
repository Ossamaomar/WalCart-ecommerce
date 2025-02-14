import { Button, Input } from "@heroui/react";
import { useForm } from "react-hook-form";
import useSignup from "./useSignup";
import PulseLoader from "react-spinners/PulseLoader";

function SignupForm() {
  const { register, formState, getValues, handleSubmit, reset } = useForm();
  const { errors } = formState;
  const { signupMutateFn, isPending } = useSignup();

  function onSubmit(data) {
    // console.log(data);
    signupMutateFn(data, {
      onSuccess: reset,
    });
  }

  function onError(err) {
    // console.log(err);
  }
  return (
    <form onSubmit={handleSubmit(onSubmit, onError)} className="space-y-14">
      <Input
        isRequired
        isDisabled={isPending}
        size="lg"
        label="Name"
        labelPlacement="outside"
        type="text"
        placeholder="name"
        variant="underlined"
        {...register("name", {
          required: "This input field is required",
        })}
      />

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
        {...register("password", {
          required: "This input field is required",
          minLength: {
            value: 8,
            message: "Password needs a minimum of 8 characters",
          },
        })}
      />

      <Input
        isRequired
        isDisabled={isPending}
        errorMessage={errors?.rePassword?.message}
        isInvalid={errors?.rePassword?.message}
        size="lg"
        label="Re-Password"
        labelPlacement="outside"
        type="password"
        placeholder="re-password"
        variant="underlined"
        {...register("rePassword", {
          required: "This input field is required",
          validate: (value) =>
            value === getValues().password || "Passwords do not match",
        })}
      />

      <Input
        isRequired
        isDisabled={isPending}
        errorMessage={errors?.phone?.message}
        isInvalid={errors?.phone?.message}
        size="lg"
        label="Phone NO."
        labelPlacement="outside"
        type="tel"
        placeholder="phone"
        variant="underlined"
        {...register("phone", {
          required: "This input field is required",
          pattern: {
            value: /^(?:\+20|0)?1[0125][0-9]{8}$/,
            message: "Phone number entered is not correct",
          },
        })}
      />

      <Button
        className="bg-purple-600 border text-white text-lg px-6 py-6 rounded-2xl hover:bg-white hover:text-black hover:border-black"
        variant="flat"
        type="submit"
        isDisabled={isPending}
      >
        {isPending ? <PulseLoader color="#fff" /> : "Create Account"}
      </Button>
    </form>
  );
}

export default SignupForm;
