import { Button, Input } from "@heroui/react";
import { useForm } from "react-hook-form";
import { forgotPassword } from "../../services/apiAuth";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function ForgotPasswordForm() {
  const { register, formState, handleSubmit } = useForm();
  const { errors } = formState;
  const navigate = useNavigate();
  const [isSuccess, setIsSuccess] = useState(false)

  async function onSubmit(formData) {
    // console.log(formData);

    try {
      const res = await forgotPassword(formData.email);
      if (res.statusMsg === "success") {
        setIsSuccess(true)
        navigate("/forgotPasswordOTP");
      }
    } catch (error) {
      // console.log(error);
    }
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
        // isDisabled={isPending}
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

      <Button
        className="bg-purple-600 border text-white text-lg px-6 py-6 rounded-2xl hover:bg-white hover:text-black hover:border-black"
        variant="flat"
        type="submit"
        onPress={() => navigate('/verifyCode')}
        // isDisabled={isPending}
      >
        {/* {isPending ? <PulseLoader color="#fff" /> : "Sign In"} */}
        Send Code
      </Button>
    </form>
  );
}

export default ForgotPasswordForm;
