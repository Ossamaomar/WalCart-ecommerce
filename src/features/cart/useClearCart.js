import { useMutation, useQueryClient } from "@tanstack/react-query";

import toast from "react-hot-toast";
import { clearUserCart } from "../../services/apiCart";

function useClearCart() {
    const queryClient = useQueryClient();
    const { mutate:clearCartMutateFn, isPending, isSuccess } = useMutation({
      mutationFn: clearUserCart,
      onSuccess: (data) => {
        toast.success(`Cart deleted successfully`);
        queryClient.invalidateQueries(['cart']);
        queryClient.setQueryData(['cartModified'], data); 
      },
      onError: (err) => {
        toast.error(err.message);
        console.log(err.message);
      },
    });
  
    return {clearCartMutateFn, isPending, isSuccess}
}

export default useClearCart;
