import { useMutation, useQueryClient } from "@tanstack/react-query";

import toast from "react-hot-toast";
import { addProductToCart } from "../../services/apiCart";


function useAddProduct() {
    const queryClient = useQueryClient();
    const { mutate:addProductMutatFn, isPending, isSuccess } = useMutation({
      mutationFn: (productObj) => addProductToCart(productObj),
      onSuccess: (data) => {
        toast.success(`Product successfully added to your cart`);
        queryClient.invalidateQueries(['cart']);
        queryClient.setQueryData(['cartModified'], data);
      },
      onError: (err) => {
        toast.error(err.message);
        console.log(err.message);
      },
    });
  
    return {addProductMutatFn, isPending, isSuccess}
}

export default useAddProduct
