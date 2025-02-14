import { Button, Input } from "@heroui/react";
import { useForm } from "react-hook-form";
import { useUserContext } from "../../contexts/UserContext";
import useUpdateUserData from "./useUpdateUserData";
import PulseLoader from "react-spinners/PulseLoader";


function UpdateAccountInformation() {
  const { userToken } = useUserContext();
  const { register, formState, handleSubmit, reset } = useForm();
  const { updateUserDataMutateFn, isPending } = useUpdateUserData();
  const { errors } = formState;

  function onSubmit(formData) {
    updateUserDataMutateFn(
      {
        userToken,
        userData: { email: formData.email, name: formData.name, phone: formData.phone },
      },
      {
        onSuccess: () => reset()
      }
    );
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
        {isPending ? <PulseLoader color="#fff" /> : "Update Account"}
        
      </Button>
    </form>
  );
}

export default UpdateAccountInformation;
