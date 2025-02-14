import { Button, Input } from "@heroui/react";
import { useForm } from "react-hook-form";
import useResetPassword from "./useResetPassword";

function ResetPasswordForm() {
  const { register, formState, handleSubmit, getValues } = useForm();
  const { errors } = formState;
  const { resetPasswordMutateFn, isPending } = useResetPassword();

  function onSubmit(formData) {
    // console.log(formData);
    resetPasswordMutateFn(formData);
  }

  function onError(err) {
    // console.log(err);
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit, onError)}
      className="text-lg md:w-[400px] space-y-12 md:px-5"
    >
      <h2 className="text-4xl font-light mb-20 mt-5">Account Information</h2>
      <Input
        isRequired
        disabled={isPending}
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
        disabled={isPending}
        errorMessage={errors?.password?.message}
        isInvalid={errors?.password?.message}
        size="lg"
        label="Password"
        labelPlacement="outside"
        type="password"
        placeholder="password"
        variant="underlined"
        {...register("newPassword", {
          required: "This input field is required",
          minLength: {
            value: 8,
            message: "Password needs a minimum of 8 characters",
          },
        })}
      />

      <Input
        isRequired
        disabled={isPending}
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
            value === getValues().newPassword || "Passwords do not match",
        })}
      />

      <Button
        className="bg-purple-600 border text-white text-lg px-6 py-6 rounded-2xl hover:bg-white hover:text-black hover:border-black"
        variant="flat"
        type="submit"
      >
        {/* {isPending ? <PulseLoader color="#fff" /> : "Sign In"} */}
        Update Password
      </Button>
    </form>
  );
}

export default ResetPasswordForm;
