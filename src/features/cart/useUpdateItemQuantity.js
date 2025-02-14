import { useMutation, useQueryClient } from "@tanstack/react-query";

import toast from "react-hot-toast";
import {  updateItemQuantity } from "../../services/apiCart";

function useUpdateItemQuantity() {
    const queryClient = useQueryClient();
    const { mutate:updateItemQuantityMutateFn, isPending, isSuccess } = useMutation({
      mutationFn: (cartObj) => updateItemQuantity(cartObj),
      onSuccess: (data) => {
        toast.success(`Item updated successfully`);
        queryClient.invalidateQueries(['cart']);
        queryClient.setQueryData(['cartModified'], data); 
      },
      onError: (err) => {
        toast.error(err.message);
        console.log(err.message);
      },
    });
  
    return {updateItemQuantityMutateFn, isPending, isSuccess}
}

export default useUpdateItemQuantity;
