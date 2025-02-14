import { useMutation, useQueryClient } from "@tanstack/react-query";

import toast from "react-hot-toast";
import { checkoutSession } from "../../services/apiOrders";

function useCheckoutSession() {
  const queryClient = useQueryClient();
    const { mutate:checkoutSessionMutateFn, isPending, isSuccess } = useMutation({
      mutationFn: (checkoutData) => checkoutSession(checkoutData),
      onSuccess: (data) => {
        queryClient.removeQueries(["cart"])
        window.location.href = data.session.url;
      },
      onError: (err) => {
        toast.error(err.message);
        console.log(err.message);
      },
    });
  
    return {checkoutSessionMutateFn, isPending, isSuccess}
}

export default useCheckoutSession;
