import { useMutation, useQueryClient } from "@tanstack/react-query";

import toast from "react-hot-toast";
import { deleteWishlistItem } from "../../services/apiWishlist";

function useDeleteWishlistProduct() {
  const queryClient = useQueryClient();
  const {
    mutate: deleteProductFromWishlistMutateFn,
    isPending,
    isSuccess,
  } = useMutation({
    mutationFn: (productObj) => deleteWishlistItem(productObj),
    onSuccess: () => {
      toast.success(`Product successfully deleted from your wishlist`);
      queryClient.invalidateQueries(["wishlist"]);
    },
    onError: (err) => {
      toast.error(err.message);
      console.log(err.message);
    },
  });

  return { deleteProductFromWishlistMutateFn, isPending, isSuccess };
}

export default useDeleteWishlistProduct;
