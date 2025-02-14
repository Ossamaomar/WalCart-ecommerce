import { useMutation, useQueryClient } from "@tanstack/react-query";

import toast from "react-hot-toast";
import { createCashOrder } from "../../services/apiOrders";
import { useNavigate } from "react-router-dom";

function useCashOrder() {
    const navigate = useNavigate();
    const queryClient = useQueryClient();
    const { mutate:createCashOrderMutateFn, isPending, isSuccess } = useMutation({
      mutationFn: (checkoutData) => createCashOrder(checkoutData),
      onSuccess: (data) => {
        toast.success("Your order is succesfully placed!");
        queryClient.removeQueries(["cart"]);
        navigate('/allorders');
      },
      onError: (err) => {
        toast.error(err.message);
        console.log(err.message);
      },
    });
  
    return {createCashOrderMutateFn, isPending, isSuccess}
}

export default useCashOrder;
