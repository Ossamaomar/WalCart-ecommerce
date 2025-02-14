import { useForm } from "react-hook-form";
import { Button, Input } from "@heroui/react";
import { checkoutSession } from "../../services/apiOrders";
import useCart from "../cart/useCart";
import Spinner from "../../ui/Spinner";
import useCheckoutSession from "./useCheckoutSession";
import useCashOrder from "./useCashOrder";
import { useUserContext } from "../../contexts/UserContext";

function CheckoutForm() {
  const { register, formState, handleSubmit } = useForm();
  const { errors } = formState;
  const {userToken} = useUserContext();
  const { cart, isLoading } = useCart(userToken);
  const { checkoutSessionMutateFn, isPending } = useCheckoutSession();
  const { createCashOrderMutateFn } = useCashOrder();

  function onSubmit(data, e) {
    const buttonClicked = e.nativeEvent.submitter.name;
    if(buttonClicked === 'online') checkoutSessionMutateFn({ shippingAddress: data, id: cart?._id });
    if(buttonClicked === 'cash') createCashOrderMutateFn({ shippingAddress: data, id: cart._id });
  }

  function onError(err) {
    // console.log(err);
  }

  if (isLoading) return <Spinner />;
  return (
    <form
      onSubmit={handleSubmit(onSubmit, onError)}
      className="text-lg md:w-[400px] space-y-12 md:px-5"
    >
      <h2 className="text-4xl font-light mb-20 mt-5">Shipping Address</h2>

      <Input
        isRequired
        errorMessage={errors?.details?.message}
        isInvalid={errors?.details?.message}
        size="lg"
        label="Address Details"
        labelPlacement="outside"
        type="text"
        placeholder="address details"
        variant="underlined"
        {...register("details", {
          required: "This input field is required",
        })}
      />

      <Input
        isRequired
        errorMessage={errors?.phone?.message}
        isInvalid={errors?.phone?.message}
        size="lg"
        label="Phone NO."
        labelPlacement="outside"
        type="text"
        placeholder="phone"
        variant="underlined"
        {...register("phone", {
          required: "This input field is required",
        })}
      />
      <Input
        isRequired
        errorMessage={errors?.city?.message}
        isInvalid={errors?.city?.message}
        size="lg"
        label="City"
        labelPlacement="outside"
        type="text"
        placeholder="city"
        variant="underlined"
        {...register("city", {
          required: "This input field is required",
        })}
      />

      <div className="space-x-4">
        <Button
          className="bg-purple-600 border text-white text-lg px-6 py-6 rounded-2xl hover:bg-white hover:text-black hover:border-black"
          variant="flat"
          type="submit"
          name="online"
        >
          Pay Online
        </Button>
        <Button
          className="bg-white border border-black text-black text-lg px-6 py-6 rounded-2xl hover:bg-black hover:text-white hover:border-black"
          variant="flat"
          type="submit"
          name="cash"
        >
          Pay on Delivery
        </Button>
      </div>
    </form>
  );
}

export default CheckoutForm;
