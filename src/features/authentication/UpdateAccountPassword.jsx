import { Button, Input } from "@heroui/react";
import { useForm } from "react-hook-form";
import useUpdateAccountPassword from "./useUpdateAccountPassword";
import { useUserContext } from "../../contexts/UserContext";
import PulseLoader from "react-spinners/PulseLoader";


function UpdateAccountPassword() {
    const  {userToken} = useUserContext();
  const { register, formState, handleSubmit, getValues, reset } = useForm();
  const { errors } = formState;
  const {changePasswordMutateFn, isPending} = useUpdateAccountPassword();

  function onSubmit(formData) {
    // console.log(formData);
    changePasswordMutateFn({data: formData, userToken}, {
      onSuccess : () => reset()
    })
  }

  function onError(err) {
    // console.log(err);
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit, onError)}
      className="text-lg md:w-[400px] space-y-12 md:px-5"
    >
      <h2 className="text-4xl font-light mb-20 mt-5">Change Password</h2>
      <Input
        isRequired
        disabled={isPending}
        errorMessage={errors?.password?.message}
        isInvalid={errors?.password?.message}
        size="lg"
        label="Current Password"
        labelPlacement="outside"
        type="password"
        placeholder="current password"
        variant="underlined"
        {...register("currentPassword", {
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
        errorMessage={errors?.password?.message}
        isInvalid={errors?.password?.message}
        size="lg"
        label="New Password"
        labelPlacement="outside"
        type="password"
        placeholder="new password"
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
            value === getValues().password || "Passwords do not match",
        })}
      />

      <Button
        className="bg-purple-600 border text-white text-lg px-6 py-6 rounded-2xl hover:bg-white hover:text-black hover:border-black"
        variant="flat"
        type="submit"
      >
        {isPending ? <PulseLoader color="#fff" /> : "Update Password"}
        
      </Button>
    </form>
  );
}

export default UpdateAccountPassword;
