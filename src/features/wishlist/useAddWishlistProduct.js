import { useMutation, useQueryClient } from "@tanstack/react-query";

import toast from "react-hot-toast";
import { addProductToWishlist } from "../../services/apiWishlist";


function useAddWishlistProduct() {
    const queryClient = useQueryClient();
    const { mutate:addProductToWishlistMutatFn, isPending, isSuccess } = useMutation({
      mutationFn: (productObj) => addProductToWishlist(productObj),
      onSuccess: () => {
        toast.success(`Product successfully added to your wishlist`);
        queryClient.invalidateQueries(['wishlist']);
      },
      onError: (err) => {
        toast.error(err.message);
        console.log(err.message);
      },
    });
  
    return {addProductToWishlistMutatFn, isPending, isSuccess}
}

export default useAddWishlistProduct;
