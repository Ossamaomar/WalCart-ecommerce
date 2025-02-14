import { useQuery } from "@tanstack/react-query";
import { getProductDetails } from "../../services/apiProducts";

function useProductDetails(id) {
  const { isLoading, data: product } = useQuery({
    queryKey: ["productDetails", id],
    queryFn: () => getProductDetails(id),
  });

  return { isLoading, product };
}

export default useProductDetails;