import { useMutation, useQueryClient } from "@tanstack/react-query";

import toast from "react-hot-toast";
import { deleteCartItem } from "../../services/apiCart";

function useDeleteCartItem() {
    const queryClient = useQueryClient();
    const { mutate:deleteCartItemMutateFn, isPending, isSuccess } = useMutation({
      mutationFn: (cartObj) => deleteCartItem(cartObj),
      onSuccess: (data) => {
        toast.success(`Cart item removed successfully`);
        queryClient.invalidateQueries(['cart']);
        queryClient.setQueryData(['cartModified'], data); 
      },
      onError: (err) => {
        toast.error(err.message);
        console.log(err.message);
      },
    });
  
    return {deleteCartItemMutateFn, isPending, isSuccess}
}

export default useDeleteCartItem;
